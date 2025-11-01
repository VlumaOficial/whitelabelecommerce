-- WhiteLabelEcommerce - Dados de Exemplo (Seeds)
-- Execute este script QUINTO no Supabase SQL Editor

-- Inserir configuração padrão do tenant
INSERT INTO public.tenant_configs (tenant_name, domain, primary_color, secondary_color, accent_color, settings) 
VALUES (
    'WhiteLabel Pet Store',
    'localhost:3000',
    '#10b981',
    '#3b82f6', 
    '#f59e0b',
    '{
        "currency": "BRL",
        "language": "pt-BR",
        "timezone": "America/Sao_Paulo",
        "features": {
            "reviews": true,
            "wishlist": true,
            "subscriptions": true,
            "multi_payment": true
        }
    }'::jsonb
);

-- Inserir categorias principais
INSERT INTO public.categories (name, slug, description, sort_order, is_active) VALUES
('Pets', 'pets', 'Produtos para animais de estimação', 1, true),
('Casa', 'casa', 'Produtos para casa e decoração', 2, true),
('Jardim', 'jardim', 'Produtos para jardim e plantas', 3, true),
('Piscina', 'piscina', 'Produtos para piscina e área aquática', 4, true);

-- Inserir subcategorias para Pets
INSERT INTO public.categories (name, slug, description, parent_id, sort_order, is_active) VALUES
('Cachorros', 'cachorros', 'Produtos específicos para cães', 1, 1, true),
('Gatos', 'gatos', 'Produtos específicos para gatos', 1, 2, true),
('Ração', 'racao', 'Rações e alimentos para pets', 1, 3, true),
('Brinquedos', 'brinquedos-pets', 'Brinquedos para animais', 1, 4, true),
('Higiene', 'higiene-pets', 'Produtos de higiene para pets', 1, 5, true);

-- Inserir subcategorias para Casa
INSERT INTO public.categories (name, slug, description, parent_id, sort_order, is_active) VALUES
('Decoração', 'decoracao', 'Itens decorativos para casa', 2, 1, true),
('Móveis', 'moveis', 'Móveis para casa', 2, 2, true),
('Cozinha', 'cozinha', 'Utensílios para cozinha', 2, 3, true),
('Limpeza', 'limpeza', 'Produtos de limpeza', 2, 4, true);

-- Inserir produtos de exemplo
INSERT INTO public.products (name, slug, description, short_description, price, sku, stock_quantity, category_id, brand, featured_image, is_featured, is_active) VALUES
-- Produtos para Pets
('Ração Premium para Cães Adultos 15kg', 'racao-premium-caes-15kg', 'Ração super premium para cães adultos de todas as raças. Rica em proteínas e nutrientes essenciais.', 'Ração premium 15kg para cães adultos', 89.90, 'PET001', 50, 7, 'PetNutri', '/images/racao-caes.jpg', true, true),
('Brinquedo Corda para Cães', 'brinquedo-corda-caes', 'Brinquedo de corda resistente para cães de todos os tamanhos. Ajuda na limpeza dos dentes.', 'Brinquedo de corda resistente', 19.90, 'PET002', 100, 8, 'PetToys', '/images/brinquedo-corda.jpg', false, true),
('Areia Sanitária para Gatos 4kg', 'areia-sanitaria-gatos-4kg', 'Areia sanitária aglomerante com controle de odor. Fácil de limpar.', 'Areia sanitária aglomerante 4kg', 24.90, 'PET003', 75, 6, 'CatClean', '/images/areia-gatos.jpg', true, true),
('Shampoo para Pets 500ml', 'shampoo-pets-500ml', 'Shampoo neutro para cães e gatos. Fórmula suave que não irrita a pele.', 'Shampoo neutro 500ml', 15.90, 'PET004', 80, 9, 'PetCare', '/images/shampoo-pets.jpg', false, true),

-- Produtos para Casa
('Vaso Decorativo Cerâmica 30cm', 'vaso-decorativo-ceramica-30cm', 'Vaso decorativo em cerâmica com acabamento fosco. Perfeito para plantas médias.', 'Vaso cerâmica decorativo 30cm', 45.90, 'CASA001', 25, 10, 'HomeDecor', '/images/vaso-ceramica.jpg', true, true),
('Jogo de Panelas Antiaderente 5 Peças', 'jogo-panelas-antiaderente-5pcs', 'Jogo de panelas com revestimento antiaderente. Inclui 3 panelas, 1 frigideira e 1 caçarola.', 'Jogo panelas antiaderente 5 peças', 159.90, 'CASA002', 15, 12, 'KitchenPro', '/images/jogo-panelas.jpg', true, true),
('Detergente Multiuso 500ml', 'detergente-multiuso-500ml', 'Detergente concentrado para limpeza geral. Remove gordura e sujeira difícil.', 'Detergente multiuso 500ml', 8.90, 'CASA003', 200, 13, 'CleanMax', '/images/detergente.jpg', false, true),

-- Produtos para Jardim
('Substrato para Plantas 2kg', 'substrato-plantas-2kg', 'Substrato rico em nutrientes para plantas de jardim e vasos. Melhora o desenvolvimento das raízes.', 'Substrato nutritivo 2kg', 12.90, 'JARDIM001', 60, 3, 'GreenLife', '/images/substrato.jpg', false, true),
('Regador Plástico 5L', 'regador-plastico-5l', 'Regador em plástico resistente com bico removível. Capacidade de 5 litros.', 'Regador plástico 5 litros', 22.90, 'JARDIM002', 40, 3, 'GardenTools', '/images/regador.jpg', false, true),

-- Produtos para Piscina
('Cloro para Piscina 1kg', 'cloro-piscina-1kg', 'Cloro granulado para tratamento de água de piscina. Elimina bactérias e algas.', 'Cloro granulado 1kg', 18.90, 'PISCINA001', 30, 4, 'AquaClean', '/images/cloro-piscina.jpg', false, true);

-- Inserir atributos de produtos
INSERT INTO public.product_attributes (product_id, name, value) VALUES
(1, 'Peso', '15kg'),
(1, 'Idade', 'Adulto'),
(1, 'Sabor', 'Frango'),
(2, 'Material', 'Algodão'),
(2, 'Tamanho', 'Médio'),
(3, 'Peso', '4kg'),
(3, 'Tipo', 'Aglomerante'),
(4, 'Volume', '500ml'),
(4, 'pH', 'Neutro'),
(5, 'Material', 'Cerâmica'),
(5, 'Altura', '30cm'),
(6, 'Peças', '5'),
(6, 'Material', 'Alumínio'),
(7, 'Volume', '500ml'),
(7, 'Tipo', 'Concentrado');

-- Inserir cupons de exemplo
INSERT INTO public.coupons (code, type, value, minimum_amount, usage_limit, expires_at, is_active) VALUES
('BEMVINDO15', 'percentage', 15.00, 50.00, 100, NOW() + INTERVAL '30 days', true),
('FRETEGRATIS', 'fixed', 10.00, 80.00, 200, NOW() + INTERVAL '60 days', true),
('BLACKFRIDAY', 'percentage', 30.00, 100.00, 500, NOW() + INTERVAL '7 days', true),
('PRIMEIRACOMPRA', 'percentage', 10.00, 30.00, NULL, NOW() + INTERVAL '90 days', true);
