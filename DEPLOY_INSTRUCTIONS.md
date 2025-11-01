# 🚀 WhiteLabelEcommerce - Instruções de Deploy

## 📋 **Ordem de Execução dos Scripts SQL**

Execute os scripts na seguinte ordem no **Supabase SQL Editor**:

### 1️⃣ **Schema Principal**
```sql
-- Arquivo: 001_create_schema.sql
-- Cria: tenant_configs, users, addresses, categories, products
```

### 2️⃣ **Tabelas de E-commerce**
```sql
-- Arquivo: 002_create_commerce_tables.sql
-- Cria: product_attributes, carts, cart_items, coupons, orders, order_items
```

### 3️⃣ **Tabelas Adicionais**
```sql
-- Arquivo: 003_create_additional_tables.sql
-- Cria: payments, reviews, wishlist_items, subscriptions, notifications
```

### 4️⃣ **Políticas de Segurança**
```sql
-- Arquivo: 004_security_policies.sql
-- Configura: RLS (Row Level Security) para todas as tabelas
```

### 5️⃣ **Dados de Exemplo**
```sql
-- Arquivo: 005_seed_data.sql
-- Insere: categorias, produtos, cupons e configurações iniciais
```

## 🔧 **Como Executar**

1. **Acesse**: https://supabase.com/dashboard
2. **Selecione**: Seu projeto WhiteLabelEcommerce
3. **Vá para**: SQL Editor (menu lateral)
4. **Execute**: Cada script na ordem acima
5. **Aguarde**: Confirmação de sucesso para cada script

## ✅ **Verificação**

Após executar todos os scripts, verifique no **Table Editor**:

### **Tabelas Criadas (15 tabelas):**
- ✅ `tenant_configs` - Configurações WhiteLabel
- ✅ `users` - Usuários (UUID + user_number)
- ✅ `addresses` - Endereços dos usuários
- ✅ `categories` - Categorias de produtos
- ✅ `products` - Produtos (ID numérico)
- ✅ `product_attributes` - Atributos dos produtos
- ✅ `carts` - Carrinhos de compra
- ✅ `cart_items` - Itens do carrinho
- ✅ `coupons` - Cupons de desconto
- ✅ `orders` - Pedidos (ID numérico + order_number)
- ✅ `order_items` - Itens dos pedidos
- ✅ `payments` - Pagamentos
- ✅ `reviews` - Avaliações de produtos
- ✅ `wishlist_items` - Lista de desejos
- ✅ `subscriptions` - Assinaturas/compras programadas
- ✅ `notifications` - Notificações do sistema

### **Dados de Exemplo Inseridos:**
- ✅ 4 categorias principais (Pets, Casa, Jardim, Piscina)
- ✅ 9 subcategorias
- ✅ 10 produtos de exemplo
- ✅ Atributos dos produtos
- ✅ 4 cupons promocionais
- ✅ Configuração inicial do tenant

## 🎯 **Benefícios dos IDs Numéricos**

### **URLs Amigáveis:**
- `/produto/1` - Ração Premium para Cães
- `/produto/2` - Brinquedo Corda
- `/categoria/1` - Pets

### **Administração Simplificada:**
- Pedido #1234 (fácil de lembrar)
- Produto ID 1, 2, 3... (sequencial)
- Relatórios por faixa de IDs

### **Performance Otimizada:**
- Índices 4x menores que UUIDs
- Queries mais rápidas
- Menos uso de memória

## 🔐 **Segurança Implementada**

- ✅ **RLS habilitado** em todas as tabelas
- ✅ **Políticas específicas** por tipo de usuário
- ✅ **Isolamento de dados** por usuário
- ✅ **Validações** de integridade
- ✅ **Auditoria** com timestamps

## 🏢 **Multi-Tenant Ready**

- ✅ Tabela `tenant_configs` para múltiplos clientes
- ✅ Campo `tenant_id` nos usuários
- ✅ Configurações por marca/cliente
- ✅ Isolamento de dados por tenant

## 📞 **Suporte**

Se encontrar algum erro durante a execução:

1. **Verifique** se executou na ordem correta
2. **Confirme** se o projeto Supabase está ativo
3. **Revise** se há erros de sintaxe no console
4. **Reporte** qualquer problema encontrado

---

**Após executar todos os scripts, confirme a conclusão para continuarmos com o desenvolvimento das páginas! 🚀**
