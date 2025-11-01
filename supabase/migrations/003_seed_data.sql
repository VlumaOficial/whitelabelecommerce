-- WhiteLabelEcommerce - Dados Iniciais (Seeds)
-- Populando o banco com categorias e produtos de exemplo

-- Inserir categorias principais (inspiradas na Cobasi)
INSERT INTO public.categories (id, name, slug, description, sort_order, is_active) VALUES
-- Categorias principais
('550e8400-e29b-41d4-a716-446655440001', 'Pets', 'pets', 'Produtos para animais de estimação', 1, true),
('550e8400-e29b-41d4-a716-446655440002', 'Casa', 'casa', 'Produtos para casa e decoração', 2, true),
('550e8400-e29b-41d4-a716-446655440003', 'Jardim', 'jardim', 'Produtos para jardim e plantas', 3, true),
('550e8400-e29b-41d4-a716-446655440004', 'Piscina', 'piscina', 'Produtos para piscina e área externa', 4, true),

-- Subcategorias de Pets
('550e8400-e29b-41d4-a716-446655440011', 'Cachorros', 'cachorros', 'Produtos para cães', 1, true),
('550e8400-e29b-41d4-a716-446655440012', 'Gatos', 'gatos', 'Produtos para felinos', 2, true),
('550e8400-e29b-41d4-a716-446655440013', 'Pássaros', 'passaros', 'Produtos para aves', 3, true),
('550e8400-e29b-41d4-a716-446655440014', 'Peixes', 'peixes', 'Produtos para aquarismo', 4, true),
('550e8400-e29b-41d4-a716-446655440015', 'Outros Pets', 'outros-pets', 'Produtos para outros animais', 5, true),

-- Subcategorias de Cachorros
('550e8400-e29b-41d4-a716-446655440021', 'Ração para Cães', 'racao-caes', 'Alimentação para cães', 1, true),
('550e8400-e29b-41d4-a716-446655440022', 'Brinquedos para Cães', 'brinquedos-caes', 'Brinquedos e entretenimento', 2, true),
('550e8400-e29b-41d4-a716-446655440023', 'Higiene Canina', 'higiene-canina', 'Produtos de higiene e cuidados', 3, true),
('550e8400-e29b-41d4-a716-446655440024', 'Acessórios para Cães', 'acessorios-caes', 'Coleiras, guias e acessórios', 4, true),

-- Subcategorias de Gatos
('550e8400-e29b-41d4-a716-446655440031', 'Ração para Gatos', 'racao-gatos', 'Alimentação para felinos', 1, true),
('550e8400-e29b-41d4-a716-446655440032', 'Brinquedos para Gatos', 'brinquedos-gatos', 'Brinquedos e arranhadores', 2, true),
('550e8400-e29b-41d4-a716-446655440033', 'Higiene Felina', 'higiene-felina', 'Areia sanitária e higiene', 3, true),
('550e8400-e29b-41d4-a716-446655440034', 'Acessórios para Gatos', 'acessorios-gatos', 'Transportadoras e acessórios', 4, true);

-- Atualizar parent_id das subcategorias
UPDATE public.categories SET parent_id = '550e8400-e29b-41d4-a716-446655440001' 
WHERE id IN ('550e8400-e29b-41d4-a716-446655440011', '550e8400-e29b-41d4-a716-446655440012', 
             '550e8400-e29b-41d4-a716-446655440013', '550e8400-e29b-41d4-a716-446655440014', 
             '550e8400-e29b-41d4-a716-446655440015');

UPDATE public.categories SET parent_id = '550e8400-e29b-41d4-a716-446655440011' 
WHERE id IN ('550e8400-e29b-41d4-a716-446655440021', '550e8400-e29b-41d4-a716-446655440022', 
             '550e8400-e29b-41d4-a716-446655440023', '550e8400-e29b-41d4-a716-446655440024');

UPDATE public.categories SET parent_id = '550e8400-e29b-41d4-a716-446655440012' 
WHERE id IN ('550e8400-e29b-41d4-a716-446655440031', '550e8400-e29b-41d4-a716-446655440032', 
             '550e8400-e29b-41d4-a716-446655440033', '550e8400-e29b-41d4-a716-446655440034');

-- Inserir produtos de exemplo
INSERT INTO public.products (
    id, name, slug, description, short_description, price, sale_price, sku, 
    stock_quantity, category_id, brand, images, featured_image, is_featured, is_active
) VALUES
-- Rações para Cães
(
    '660e8400-e29b-41d4-a716-446655440001',
    'Ração Premium para Cães Adultos 15kg',
    'racao-premium-caes-adultos-15kg',
    'Ração super premium desenvolvida especialmente para cães adultos de todas as raças. Rica em proteínas de alta qualidade, vitaminas e minerais essenciais para manter seu pet saudável e ativo.',
    'Ração super premium para cães adultos - 15kg',
    89.90,
    79.90,
    'RACAO001',
    50,
    '550e8400-e29b-41d4-a716-446655440021',
    'PetNutri',
    ARRAY['https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=500', 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500'],
    'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=500',
    true,
    true
),
(
    '660e8400-e29b-41d4-a716-446655440002',
    'Ração Filhotes Raças Pequenas 3kg',
    'racao-filhotes-racas-pequenas-3kg',
    'Ração especialmente formulada para filhotes de raças pequenas. Com DHA para desenvolvimento cerebral e cálcio para ossos fortes.',
    'Ração para filhotes de raças pequenas - 3kg',
    45.90,
    NULL,
    'RACAO002',
    30,
    '550e8400-e29b-41d4-a716-446655440021',
    'PetNutri',
    ARRAY['https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500'],
    'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500',
    false,
    true
),

-- Brinquedos para Cães
(
    '660e8400-e29b-41d4-a716-446655440003',
    'Bola de Borracha Resistente',
    'bola-borracha-resistente',
    'Bola de borracha natural super resistente, ideal para cães que gostam de morder. Ajuda na limpeza dos dentes e proporciona horas de diversão.',
    'Bola de borracha resistente para cães',
    19.90,
    15.90,
    'BRINQ001',
    100,
    '550e8400-e29b-41d4-a716-446655440022',
    'PetToys',
    ARRAY['https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500'],
    'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500',
    true,
    true
),
(
    '660e8400-e29b-41d4-a716-446655440004',
    'Corda de Algodão Trançada',
    'corda-algodao-trancada',
    'Corda de algodão 100% natural, trançada à mão. Perfeita para brincadeiras de cabo de guerra e para ajudar na limpeza dos dentes.',
    'Corda de algodão natural trançada',
    12.90,
    NULL,
    'BRINQ002',
    75,
    '550e8400-e29b-41d4-a716-446655440022',
    'PetToys',
    ARRAY['https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500'],
    'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500',
    false,
    true
),

-- Rações para Gatos
(
    '660e8400-e29b-41d4-a716-446655440005',
    'Ração Premium para Gatos Castrados 10kg',
    'racao-premium-gatos-castrados-10kg',
    'Ração especialmente desenvolvida para gatos castrados, com baixo teor de gordura e magnésio controlado para prevenir problemas urinários.',
    'Ração premium para gatos castrados - 10kg',
    95.90,
    85.90,
    'RACAO003',
    40,
    '550e8400-e29b-41d4-a716-446655440031',
    'FelineNutri',
    ARRAY['https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=500'],
    'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=500',
    true,
    true
),

-- Brinquedos para Gatos
(
    '660e8400-e29b-41d4-a716-446655440006',
    'Arranhador Torre com Brinquedos',
    'arranhador-torre-brinquedos',
    'Arranhador em formato de torre com múltiplos níveis, bolinhas suspensas e base estável. Ideal para gatos brincarem e afiarem as unhas.',
    'Arranhador torre com brinquedos integrados',
    129.90,
    99.90,
    'ARRAN001',
    20,
    '550e8400-e29b-41d4-a716-446655440032',
    'CatFun',
    ARRAY['https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500'],
    'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500',
    true,
    true
),

-- Higiene Felina
(
    '660e8400-e29b-41d4-a716-446655440007',
    'Areia Sanitária Bentonita 10kg',
    'areia-sanitaria-bentonita-10kg',
    'Areia sanitária de bentonita com alta capacidade de absorção e controle de odores. Forma grumos compactos para fácil limpeza.',
    'Areia sanitária bentonita - 10kg',
    24.90,
    NULL,
    'AREIA001',
    60,
    '550e8400-e29b-41d4-a716-446655440033',
    'CleanCat',
    ARRAY['https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=500'],
    'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=500',
    false,
    true
);

-- Inserir atributos dos produtos
INSERT INTO public.product_attributes (product_id, name, value) VALUES
-- Ração Premium Cães
('660e8400-e29b-41d4-a716-446655440001', 'Peso', '15kg'),
('660e8400-e29b-41d4-a716-446655440001', 'Idade', 'Adulto'),
('660e8400-e29b-41d4-a716-446655440001', 'Tamanho', 'Todas as raças'),

-- Ração Filhotes
('660e8400-e29b-41d4-a716-446655440002', 'Peso', '3kg'),
('660e8400-e29b-41d4-a716-446655440002', 'Idade', 'Filhote'),
('660e8400-e29b-41d4-a716-446655440002', 'Tamanho', 'Raças pequenas'),

-- Bola de Borracha
('660e8400-e29b-41d4-a716-446655440003', 'Material', 'Borracha natural'),
('660e8400-e29b-41d4-a716-446655440003', 'Tamanho', 'Médio'),
('660e8400-e29b-41d4-a716-446655440003', 'Cor', 'Azul'),

-- Corda de Algodão
('660e8400-e29b-41d4-a716-446655440004', 'Material', 'Algodão 100%'),
('660e8400-e29b-41d4-a716-446655440004', 'Comprimento', '30cm'),
('660e8400-e29b-41d4-a716-446655440004', 'Cor', 'Natural'),

-- Ração Gatos Castrados
('660e8400-e29b-41d4-a716-446655440005', 'Peso', '10kg'),
('660e8400-e29b-41d4-a716-446655440005', 'Tipo', 'Castrados'),
('660e8400-e29b-41d4-a716-446655440005', 'Idade', 'Adulto'),

-- Arranhador Torre
('660e8400-e29b-41d4-a716-446655440006', 'Material', 'Sisal e MDF'),
('660e8400-e29b-41d4-a716-446655440006', 'Altura', '80cm'),
('660e8400-e29b-41d4-a716-446655440006', 'Cor', 'Bege'),

-- Areia Sanitária
('660e8400-e29b-41d4-a716-446655440007', 'Tipo', 'Bentonita'),
('660e8400-e29b-41d4-a716-446655440007', 'Peso', '10kg'),
('660e8400-e29b-41d4-a716-446655440007', 'Fragrância', 'Sem perfume');

-- Inserir cupons de exemplo
INSERT INTO public.coupons (code, type, value, minimum_amount, usage_limit, expires_at, is_active) VALUES
('BEMVINDO10', 'percentage', 10.00, 50.00, 1000, '2024-12-31 23:59:59', true),
('FRETEGRATIS', 'fixed', 15.00, 100.00, 500, '2024-12-31 23:59:59', true),
('BLACKFRIDAY', 'percentage', 25.00, 200.00, 100, '2024-11-30 23:59:59', true),
('PRIMEIRACOMPRA', 'percentage', 15.00, 80.00, NULL, NULL, true);

-- Inserir avaliações de exemplo (simulando usuários)
-- Nota: Em produção, essas avaliações seriam criadas por usuários reais
INSERT INTO public.reviews (id, product_id, user_id, rating, title, comment, is_verified, is_approved) VALUES
('770e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440001', 5, 'Excelente ração!', 'Meu cachorro adorou essa ração. Pelagem ficou mais brilhosa e ele está mais disposto.', true, true),
('770e8400-e29b-41d4-a716-446655440002', '660e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440001', 4, 'Bola resistente', 'Muito boa, meu pitbull não conseguiu destruir ainda!', true, true),
('770e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440005', '550e8400-e29b-41d4-a716-446655440001', 5, 'Perfeita para gatos castrados', 'Minha gata manteve o peso ideal com essa ração.', true, true),
('770e8400-e29b-41d4-a716-446655440004', '660e8400-e29b-41d4-a716-446655440006', '550e8400-e29b-41d4-a716-446655440001', 5, 'Arranhador top!', 'Meus 3 gatos usam todos os dias. Muito bem feito e resistente.', true, true);

-- Criar view para estatísticas de produtos
CREATE OR REPLACE VIEW product_stats AS
SELECT 
    p.id,
    p.name,
    p.price,
    p.sale_price,
    p.stock_quantity,
    COALESCE(AVG(r.rating), 0) as average_rating,
    COUNT(r.id) as total_reviews,
    COUNT(CASE WHEN r.rating = 5 THEN 1 END) as five_star_reviews,
    COUNT(CASE WHEN r.rating = 4 THEN 1 END) as four_star_reviews,
    COUNT(CASE WHEN r.rating = 3 THEN 1 END) as three_star_reviews,
    COUNT(CASE WHEN r.rating = 2 THEN 1 END) as two_star_reviews,
    COUNT(CASE WHEN r.rating = 1 THEN 1 END) as one_star_reviews
FROM public.products p
LEFT JOIN public.reviews r ON p.id = r.product_id AND r.is_approved = true
WHERE p.is_active = true
GROUP BY p.id, p.name, p.price, p.sale_price, p.stock_quantity;

-- Criar view para categorias com contagem de produtos
CREATE OR REPLACE VIEW category_stats AS
SELECT 
    c.id,
    c.name,
    c.slug,
    c.parent_id,
    COUNT(p.id) as product_count,
    COUNT(CASE WHEN p.is_featured = true THEN 1 END) as featured_product_count
FROM public.categories c
LEFT JOIN public.products p ON c.id = p.category_id AND p.is_active = true
WHERE c.is_active = true
GROUP BY c.id, c.name, c.slug, c.parent_id
ORDER BY c.sort_order;
