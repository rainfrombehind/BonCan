/* ============================================================
   FUERA CEREBRO — SCRIPT PRINCIPAL
   ============================================================ */

(() => {
    'use strict';

    /* ------------------------------------------------------------
       CATÁLOGO DE PRODUCTOS
       ------------------------------------------------------------ */
    const PRODUCTS = [
        {
            id: 'P001',
            name: 'RUIDO ETERNO',
            category: 'poster',
            price: 680,
            code: 'FC-PS-001',
            new: true,
            limited: false,
            soldout: false,
            stock: 23,
            tags: ['PÓSTER', 'A3', '3 COLORES'],
            size: '420 × 297 mm (A3)',
            paper: 'Papel reciclado kraft · 250g',
            colors: 'Rojo · Negro · Blanco',
            run: 'Edición 40 ejemplares',
            shortDesc: 'Collage de texturas analógicas. Retícula de grano fino sobre tres capas de tinta al agua. Firmado y numerado a lápiz.',
            art: {
                style: 'grid',
                palette: ['#d92228', '#f2f2f2', '#1a1a1a'],
                titleA: 'RUIDO',
                titleB: 'ETERNO',
                titleC: '',
                accent: 'circle-grid'
            }
        },
        {
            id: 'P002',
            name: 'SANGRE DE PAPEL',
            category: 'poster',
            price: 820,
            code: 'FC-PS-002',
            new: true,
            limited: true,
            soldout: false,
            stock: 12,
            tags: ['PÓSTER', 'A2', '4 COLORES'],
            size: '594 × 420 mm (A2)',
            paper: 'Papel Stone Blanco · 280g',
            colors: 'Rojo sangre · Negro · Gris hueso · Barniz',
            run: 'Edición limitada 25 ejemplares',
            shortDesc: 'Tipografía constructivista sobre relieve de barniz mate. Diagonal agresiva. Manchas de presión incluidas, no opcionales.',
            art: {
                style: 'diagonal',
                palette: ['#d92228', '#8b0000', '#f2f2f2'],
                titleA: 'SANGRE',
                titleB: 'DE',
                titleC: 'PAPEL',
                accent: 'cross'
            }
        },
        {
            id: 'Z001',
            name: 'FANZINE / VOL.IV',
            category: 'zine',
            price: 320,
            code: 'FC-ZN-004',
            new: false,
            limited: false,
            soldout: false,
            stock: 45,
            tags: ['ZINE', '48 PÁG', '2 COLORES'],
            size: '210 × 148 mm (A5)',
            paper: 'Interior offset 100g · Cubierta 300g',
            colors: 'Rojo · Negro / Interior BN',
            run: '2ª edición · 100 ejemplares',
            shortDesc: 'Manifiestos, dibujos de tinta, entrevistas con talleres locales. Encuadernado grapa a grapa. Cada ejemplar tiene un sello único.',
            art: {
                style: 'stripes',
                palette: ['#d92228', '#1a1a1a', '#f2f2f2'],
                titleA: 'VOL.',
                titleB: 'IV',
                titleC: '',
                accent: 'stamp'
            }
        },
        {
            id: 'Z002',
            name: 'EL FIN DEL IMPAS',
            category: 'zine',
            price: 410,
            code: 'FC-ZN-005',
            new: true,
            limited: true,
            soldout: false,
            stock: 18,
            tags: ['ZINE', '32 PÁG', '3 COLORES'],
            size: '297 × 210 mm (A4)',
            paper: 'Papel reciclado natural 120g',
            colors: 'Rojo · Negro · Azul petróleo',
            run: 'Edición 50 ejemplares numerados',
            shortDesc: 'Poética visual. Collage + dibujo directo. Tres pasadas de tinta sobre papel crudo. Impreso en alianza con taller ZIGZAG.',
            art: {
                style: 'blocks',
                palette: ['#d92228', '#0f2027', '#f2f2f2'],
                titleA: 'FIN',
                titleB: 'DEL',
                titleC: 'IMPAS',
                accent: 'triangle'
            }
        },
        {
            id: 'C001',
            name: 'CAMISETA / CABEZA VACÍA',
            category: 'camiseta',
            price: 950,
            code: 'FC-CT-007',
            new: false,
            limited: false,
            soldout: false,
            stock: 30,
            tags: ['CAMISETA', 'ALGODÓN', '2 COLORES'],
            size: 'S · M · L · XL (consulta disponibilidad)',
            paper: 'Algodón peinado 180g · Rígido',
            colors: 'Rojo · Negro sobre base negra',
            run: 'Impresión por encargo · 48h',
            shortDesc: 'Estampado a una sola cara en cuello redondo. 2 pasadas de tinta plastisol con acabado brillante. Encogimiento mínimo.',
            art: {
                style: 'skull',
                palette: ['#d92228', '#1a1a1a', '#f2f2f2'],
                titleA: 'CABEZA',
                titleB: 'VACÍA',
                titleC: '',
                accent: 'halo'
            }
        },
        {
            id: 'C002',
            name: 'CAMISETA / MANIFIESTO',
            category: 'camiseta',
            price: 1050,
            code: 'FC-CT-009',
            new: true,
            limited: true,
            soldout: false,
            stock: 14,
            tags: ['CAMISETA', 'HEAVY', '4 COLORES'],
            size: 'S · M · L · XL',
            paper: 'Algodón heavy 240g · Desgastado',
            colors: 'Rojo · Negro · Blanco · Sobretinta',
            run: '30 piezas · Numeradas en etiqueta',
            shortDesc: 'Doble estampado frente/espalda. Tinta sobretinta sobre costuras. Cada prenda se lava previamente por separado.',
            art: {
                style: 'type',
                palette: ['#d92228', '#f2f2f2', '#1a1a1a'],
                titleA: 'MANI',
                titleB: 'FIESTO',
                titleC: '',
                accent: 'frame'
            }
        },
        {
            id: 'S001',
            name: 'PACK STICKERS / LOTE 01',
            category: 'sticker',
            price: 180,
            code: 'FC-ST-010',
            new: false,
            limited: false,
            soldout: false,
            stock: 80,
            tags: ['STICKERS', '×12', 'VINILO'],
            size: 'Variados 4~10 cm',
            paper: 'Vinilo adhesivo · Corte láser',
            colors: 'Rojo · Negro · Blanco · Brillo',
            run: 'Impresión continua · Stock permanente',
            shortDesc: '12 stickers de corte láser en vinilo de alto tráfico. Resistente a intemperie, lavadoras y almas sensibles.',
            art: {
                style: 'stack',
                palette: ['#d92228', '#1a1a1a', '#f2f2f2'],
                titleA: '×12',
                titleB: 'STICK',
                titleC: 'ERS',
                accent: 'burst'
            }
        },
        {
            id: 'S002',
            name: 'STICKERS / TERROR INDUSTRIAL',
            category: 'sticker',
            price: 240,
            code: 'FC-ST-013',
            new: true,
            limited: true,
            soldout: false,
            stock: 36,
            tags: ['STICKERS', '×18', 'HOLOGRAMA'],
            size: 'Set mixto 3~12 cm',
            paper: 'Vinilo transparente + holograma',
            colors: 'Rojo · Negro · Efecto holograma',
            run: '150 packs · Lote único',
            shortDesc: '18 piezas, 6 de ellas con acabado holograma cromado. Pegatina agresiva. Se arranca con navaja, no con uñas.',
            art: {
                style: 'industrial',
                palette: ['#d92228', '#f2f2f2', '#1a1a1a'],
                titleA: 'TERROR',
                titleB: 'INDUS',
                titleC: 'TRIAL',
                accent: 'warnings'
            }
        },
        {
            id: 'P003',
            name: 'DANZA DE LOS QUE YA NO',
            category: 'poster',
            price: 1200,
            code: 'FC-PS-005',
            new: true,
            limited: true,
            soldout: false,
            stock: 8,
            tags: ['PÓSTER', 'A1', '6 COLORES'],
            size: '841 × 594 mm (A1)',
            paper: 'Fabriano Rosaspina · 285g blanco',
            colors: '6 pasadas + barniz selectivo',
            run: 'Edición 15 ejemplares · Firmado a mano',
            shortDesc: 'Pieza estrella de la temporada. Ilustración en 6 pasadas con detalle de barniz sobre zonas de máscara. Secado lento de 72h.',
            art: {
                style: 'sacred',
                palette: ['#d92228', '#8b0000', '#1a1a1a'],
                titleA: 'DANZA',
                titleB: 'D·LOS',
                titleC: 'Q·NO',
                accent: 'mandorla'
            }
        },
        {
            id: 'P004',
            name: 'SILENCIO / 2019',
            category: 'poster',
            price: 540,
            code: 'FC-PS-000',
            new: false,
            limited: false,
            soldout: false,
            stock: 60,
            tags: ['PÓSTER', 'A3', 'BN'],
            size: '420 × 297 mm (A3)',
            paper: 'Offset natural 200g',
            colors: '1 color · Negro absoluto',
            run: 'Reimpresión 2026 · Grano fino',
            shortDesc: 'Primer diseño oficial del colectivo. Una sola pasada de negro profundo. Minimalismo de guerra. Viene doblado en cruz.',
            art: {
                style: 'minimal',
                palette: ['#1a1a1a', '#f2f2f2', '#1a1a1a'],
                titleA: 'SILEN',
                titleB: 'CIO',
                titleC: '',
                accent: 'frame-single'
            }
        },
        {
            id: 'C003',
            name: 'CAMISETA / SIN DIOS',
            category: 'camiseta',
            price: 880,
            code: 'FC-CT-003',
            new: false,
            limited: false,
            soldout: true,
            stock: 0,
            tags: ['CAMISETA', 'AGOTADA'],
            size: '—',
            paper: '—',
            colors: '—',
            run: 'Agotada · No hay reposición',
            shortDesc: 'Camiseta vintage de la primera hornada. 2ª mano · Pregunta por la lista de espera si la reimpresión sucede.',
            art: {
                style: 'warning',
                palette: ['#1a1a1a', '#d92228', '#1a1a1a'],
                titleA: 'SIN',
                titleB: 'DIOS',
                titleC: '',
                accent: 'stripe-x'
            }
        },
        {
            id: 'Z003',
            name: 'ARCHIVO / 2019—2024',
            category: 'zine',
            price: 560,
            code: 'FC-ZN-000',
            new: false,
            limited: true,
            soldout: false,
            stock: 22,
            tags: ['ZINE', '96 PÁG', 'COMPILADO'],
            size: '280 × 210 mm',
            paper: 'Papel crudo 140g · C. dura cartón',
            colors: 'BN interiores · 2 colores portada',
            run: 'Compilado histórico · Numerado',
            shortDesc: 'Recopilatorio de los 5 primeros años del taller. Maquetas, fallos, manchas y entrevistas. 96 páginas de archivo.',
            art: {
                style: 'archive',
                palette: ['#d92228', '#f2f2f2', '#1a1a1a'],
                titleA: 'AR',
                titleB: 'CHI',
                titleC: 'VO',
                accent: 'grid-mark'
            }
        }
    ];

    /* ------------------------------------------------------------
       ESTADO GLOBAL
       ------------------------------------------------------------ */
    const state = {
        cart: [],
        activeFilter: 'all',
        activeSort: 'default'
    };

    /* ------------------------------------------------------------
       UTILIDADES
       ------------------------------------------------------------ */
    const $  = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
    const fmt = (n) => '$' + n.toLocaleString('es-MX');
    const delay = (ms) => new Promise(r => setTimeout(r, ms));

    function showToast(message) {
        const toast = $('#toast');
        const text  = $('#toastText');
        if (!toast) return;
        text.textContent = message;
        toast.classList.add('show');
        clearTimeout(showToast._t);
        showToast._t = setTimeout(() => toast.classList.remove('show'), 2200);
    }

    /* ------------------------------------------------------------
       RENDER DE ARTE DE PRODUCTO (CSS / SVG ABSTRACTO)
       ------------------------------------------------------------ */
    function renderArt(art, compact = false) {
        const [c1, c2, c3] = art.palette;
        const scale = compact ? 0.78 : 1;
        const size = 1;

        let inner = '';

        switch (art.style) {
            case 'grid':
                inner = `
                    <div style="position:absolute;inset:0;background:
                        linear-gradient(135deg, ${c1} 0%, ${c1} 48%, transparent 48%, transparent 52%, ${c2} 52%, ${c2} 100%);
                        opacity:.22;clip-path:polygon(0 0,60% 0,100% 40%,100% 100%,40% 100%,0 60%);"></div>
                    <div style="position:absolute;top:18%;left:14%;width:52%;height:52%;background:transparent;
                        border:3px solid ${c1};border-radius:50%;opacity:.45;"></div>
                    <div style="position:absolute;top:30%;left:26%;width:32%;height:32%;background:${c1};
                        border-radius:50%;opacity:.2;filter:blur(6px);"></div>
                `;
                break;
            case 'diagonal':
                inner = `
                    <div style="position:absolute;inset:0;background:
                        linear-gradient(120deg, transparent 0%, transparent 38%, ${c1} 38%, ${c1} 62%, transparent 62%);
                        opacity:.28;"></div>
                    <div style="position:absolute;inset:0;background:
                        linear-gradient(120deg, transparent 0%, transparent 42%, ${c3} 42%, ${c3} 58%, transparent 58%);
                        opacity:.85;mix-blend-mode:multiply;"></div>
                    <div style="position:absolute;right:14%;bottom:16%;width:0;height:0;
                        border-top:44px solid transparent;border-bottom:44px solid transparent;
                        border-left:76px solid ${c1};opacity:.55;"></div>
                `;
                break;
            case 'stripes':
                inner = `
                    <div style="position:absolute;inset:0;background:
                        repeating-linear-gradient(45deg,${c1},${c1} 8px,transparent 8px,transparent 18px);opacity:.22;"></div>
                    <div style="position:absolute;left:12%;top:20%;width:60%;height:12px;background:${c1};opacity:.7;"></div>
                    <div style="position:absolute;left:12%;top:40%;width:70%;height:6px;background:${c2};opacity:.5;"></div>
                    <div style="position:absolute;left:12%;top:50%;width:40%;height:18px;background:${c3};opacity:.8;"></div>
                `;
                break;
            case 'blocks':
                inner = `
                    <div style="position:absolute;top:14%;left:14%;width:36%;height:36%;background:${c1};opacity:.8;"></div>
                    <div style="position:absolute;top:38%;left:38%;width:36%;height:36%;background:${c2};opacity:.8;"></div>
                    <div style="position:absolute;top:62%;left:14%;width:36%;height:22%;background:${c3};opacity:.3;"></div>
                    <div style="position:absolute;top:14%;right:14%;width:10%;height:72%;border:2px dashed ${c1};opacity:.5;"></div>
                `;
                break;
            case 'skull':
                inner = `
                    <div style="position:absolute;top:24%;left:50%;transform:translateX(-50%);
                        width:50%;aspect-ratio:1;background:${c3};border-radius:26% 26% 18% 18%;
                        box-shadow:0 6px 0 ${c1} inset;"></div>
                    <div style="position:absolute;top:42%;left:30%;width:14%;height:10%;background:${c1};border-radius:50%;
                        box-shadow:0 0 14px ${c1}, 26vw 0 0 -6vw ${c1};"></div>
                    <div style="position:absolute;top:64%;left:36%;width:28%;height:4%;background:${c1};
                        clip-path:polygon(0 0,12% 100%,24% 0,36% 100%,48% 0,60% 100%,72% 0,84% 100%,100% 0,88% 100%,76% 0,64% 100%,52% 0,40% 100%,28% 0,16% 100%);opacity:.9;"></div>
                    <div style="position:absolute;inset:0;border:2px solid ${c1};opacity:.2;"></div>
                `;
                break;
            case 'type':
                inner = `
                    <div style="position:absolute;inset:0;background:
                        repeating-linear-gradient(0deg, transparent, transparent 6px, rgba(217,34,40,.1) 6px, rgba(217,34,40,.1) 7px);"></div>
                    <div style="position:absolute;inset:10%;border:4px double ${c1};opacity:.5;"></div>
                    <div style="position:absolute;inset:18%;border:2px solid ${c3};opacity:.2;"></div>
                    <div style="position:absolute;top:12%;right:14%;width:10px;height:10px;background:${c1};"></div>
                    <div style="position:absolute;bottom:12%;left:14%;width:10px;height:10px;background:${c1};"></div>
                `;
                break;
            case 'stack':
                inner = `
                    <div style="position:absolute;top:24%;left:20%;width:40%;height:40%;
                        background:${c2};transform:rotate(-12deg);border:2px solid ${c1};opacity:.85;"></div>
                    <div style="position:absolute;top:30%;left:32%;width:40%;height:40%;
                        background:${c1};transform:rotate(6deg);opacity:.85;"></div>
                    <div style="position:absolute;top:40%;left:40%;width:40%;height:40%;
                        background:${c3};transform:rotate(-4deg);border:2px dashed ${c2};opacity:.9;"></div>
                `;
                break;
            case 'industrial':
                inner = `
                    <div style="position:absolute;inset:10%;border:3px solid ${c1};opacity:.4;"></div>
                    <div style="position:absolute;top:32%;left:18%;width:64%;height:4px;background:${c1};"></div>
                    <div style="position:absolute;top:44%;left:18%;width:64%;height:4px;background:${c1};"></div>
                    <div style="position:absolute;top:56%;left:18%;width:40%;height:4px;background:${c1};"></div>
                    <div style="position:absolute;top:24%;right:14%;width:18%;height:52%;
                        background:${c1};opacity:.15;clip-path:polygon(0 0,100% 0,100% 16%,0 16%,0 84%,100% 84%,100% 100%,0 100%);"></div>
                `;
                break;
            case 'sacred':
                inner = `
                    <div style="position:absolute;top:12%;left:50%;transform:translateX(-50%);
                        width:72%;height:76%;background:transparent;
                        clip-path:path('M50,0 L88,32 L88,72 L50,100 L12,72 L12,32 Z');
                        background:${c1};opacity:.18;"></div>
                    <div style="position:absolute;top:26%;left:50%;transform:translateX(-50%);
                        width:52%;height:56%;background:transparent;border:2px double ${c1};opacity:.6;
                        clip-path:path('M50,0 L90,30 L90,70 L50,100 L10,70 L10,30 Z');"></div>
                    <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
                        width:24%;height:24%;background:${c1};border-radius:50%;
                        box-shadow:0 0 30px ${c1};opacity:.45;"></div>
                `;
                break;
            case 'minimal':
                inner = `
                    <div style="position:absolute;inset:16%;border:1px solid ${c1};opacity:.6;"></div>
                    <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
                        width:4px;height:60%;background:${c1};"></div>
                    <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
                        width:60%;height:4px;background:${c1};"></div>
                `;
                break;
            case 'warning':
                inner = `
                    <div style="position:absolute;inset:0;background:
                        repeating-linear-gradient(45deg, ${c2}, ${c2} 10px, ${c1} 10px, ${c1} 20px);
                        opacity:.35;"></div>
                    <div style="position:absolute;top:36%;left:50%;transform:translateX(-50%);
                        width:0;height:0;border-left:48px solid transparent;border-right:48px solid transparent;
                        border-bottom:84px solid ${c1};opacity:.85;"></div>
                `;
                break;
            case 'archive':
                inner = `
                    <div style="position:absolute;inset:0;background:
                        linear-gradient(90deg, ${c1} 0%, ${c1} 10%, transparent 10%, transparent 90%, ${c1} 90%);
                        opacity:.18;"></div>
                    <div style="position:absolute;top:22%;left:18%;width:64%;height:4px;background:${c1};opacity:.5;"></div>
                    <div style="position:absolute;top:32%;left:18%;width:50%;height:4px;background:${c1};opacity:.5;"></div>
                    <div style="position:absolute;top:42%;left:18%;width:60%;height:4px;background:${c1};opacity:.5;"></div>
                    <div style="position:absolute;top:52%;left:18%;width:44%;height:4px;background:${c1};opacity:.5;"></div>
                    <div style="position:absolute;top:62%;left:18%;width:58%;height:4px;background:${c1};opacity:.3;"></div>
                    <div style="position:absolute;bottom:14%;right:14%;padding:.3em .6em;
                        border:1px dashed ${c1};color:${c1};font-family:monospace;font-size:.5em;font-weight:700;
                        transform:rotate(-6deg);">CLS-365</div>
                `;
                break;
            default:
                inner = `<div style="position:absolute;inset:16%;border:2px solid ${c1};opacity:.4;"></div>`;
        }

        const { titleA, titleB, titleC } = art;
        const titleHTML = `
            <div class="art-title" style="transform:scale(${scale});">
                <span class="art-line-a" style="color:${c3};font-size:${2.6 * size}em;text-shadow:4px 4px 0 ${c1};align-self:flex-start;padding-left:.1em;">${titleA}</span>
                <span class="art-line-b" style="color:${c1};font-size:${2.2 * size}em;background:${c3};padding:.08em .3em;align-self:center;letter-spacing:.05em;">${titleB}</span>
                ${titleC ? `<span class="art-line-c" style="color:${c3};font-size:${1.8 * size}em;-webkit-text-stroke:2px ${c1};align-self:flex-end;padding-right:.1em;">${titleC}</span>` : ''}
            </div>
        `;

        return inner + titleHTML;
    }

    /* ------------------------------------------------------------
       RENDER DE GRID DE PRODUCTOS
       ------------------------------------------------------------ */
    function renderProducts() {
        const grid = $('#productGrid');
        if (!grid) return;

        let list = PRODUCTS.slice();

        if (state.activeFilter !== 'all') {
            list = list.filter(p => p.category === state.activeFilter);
        }

        switch (state.activeSort) {
            case 'price-low':  list.sort((a, b) => a.price - b.price); break;
            case 'price-high': list.sort((a, b) => b.price - a.price); break;
            default:
                list.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
        }

        if (list.length === 0) {
            grid.innerHTML = `
                <div style="grid-column:1/-1;padding:4rem 2rem;text-align:center;border:2px dashed var(--line);background:var(--surface);">
                    <div style="font-family:var(--font-display);font-size:2.5rem;color:var(--red);margin-bottom:.6rem;letter-spacing:.1em;">— SIN RESULTADOS —</div>
                    <div style="font-family:var(--font-mono);color:var(--ink-muted);text-transform:uppercase;letter-spacing:.15em;font-size:.75rem;">No hay piezas en esta categoría</div>
                </div>
            `;
            return;
        }

        grid.innerHTML = list.map(p => {
            const badges = [];
            if (p.new) badges.push(`<span class="product-badge new">NUEVO</span>`);
            if (p.soldout) badges.push(`<span class="product-badge soldout">AGOTADO</span>`);
            else if (p.limited) badges.push(`<span class="product-badge limited">LIMITADO</span>`);

            return `
                <article class="product-card" data-id="${p.id}">
                    <div class="product-badges">${badges.join('')}</div>
                    <div class="product-img">
                        <div class="product-img-inner poster-style">
                            <div class="product-art">
                                ${renderArt(p.art, true)}
                            </div>
                        </div>
                    </div>
                    <div class="product-info">
                        <div class="product-meta">
                            <span class="product-code">${p.code}</span>
                            <span>${p.tags[0]}</span>
                        </div>
                        <h3 class="product-name">${p.name}</h3>
                        <p class="product-desc">${p.shortDesc.substring(0, 92)}${p.shortDesc.length > 92 ? '…' : ''}</p>
                        <div class="product-bottom">
                            <div class="product-price">${p.price}</div>
                            <button class="add-btn" data-add="${p.id}" ${p.soldout ? 'disabled' : ''} aria-label="Agregar al carrito">
                                ${p.soldout ? '✕' : '+'}
                            </button>
                        </div>
                    </div>
                </article>
            `;
        }).join('');
    }

    /* ------------------------------------------------------------
       MODAL DE DETALLE
       ------------------------------------------------------------ */
    function openProductModal(id) {
        const p = PRODUCTS.find(x => x.id === id);
        if (!p) return;

        const [c1, c2, c3] = p.art.palette;
        const modal = $('#productModal');
        const content = $('#modalContent');
        const badges = [];
        if (p.new) badges.push(`<span class="product-badge new" style="position:static;">NUEVO</span>`);
        if (p.soldout) badges.push(`<span class="product-badge soldout" style="position:static;">AGOTADO</span>`);
        else if (p.limited) badges.push(`<span class="product-badge limited" style="position:static;">LIMITADO · ${p.stock} u.</span>`);

        content.innerHTML = `
            <div class="modal-img poster-style">
                <div class="product-art">${renderArt(p.art)}</div>
            </div>
            <div class="modal-info">
                <div class="modal-code">${p.code}</div>
                <div style="display:flex;gap:.5rem;flex-wrap:wrap;">${badges.join('')}</div>
                <h2 class="modal-name">${p.name}</h2>
                <div class="modal-divider"></div>
                <p class="modal-desc">${p.shortDesc}</p>
                <div class="modal-specs">
                    <div class="modal-spec">
                        <div class="modal-spec-label">FORMATO</div>
                        <div class="modal-spec-value">${p.size}</div>
                    </div>
                    <div class="modal-spec">
                        <div class="modal-spec-label">SOPORTE</div>
                        <div class="modal-spec-value">${p.paper}</div>
                    </div>
                    <div class="modal-spec">
                        <div class="modal-spec-label">TINTA</div>
                        <div class="modal-spec-value">${p.colors}</div>
                    </div>
                    <div class="modal-spec">
                        <div class="modal-spec-label">EDICIÓN</div>
                        <div class="modal-spec-value">${p.run}</div>
                    </div>
                </div>
                <div style="display:flex;gap:.4rem;flex-wrap:wrap;">
                    ${p.tags.map(t => `<span style="font-family:var(--font-mono);font-weight:700;font-size:.62rem;letter-spacing:.12em;text-transform:uppercase;padding:.3rem .6rem;border:1px solid var(--line-heavy);color:var(--ink-muted);">${t}</span>`).join('')}
                </div>
                <div class="modal-bottom">
                    <div class="modal-price">${p.price}</div>
                    <button class="btn btn-primary" data-modal-add="${p.id}" ${p.soldout ? 'disabled style="opacity:.4;pointer-events:none;"' : ''}>
                        <span class="btn-text">${p.soldout ? 'AGOTADO' : 'AGREGAR AL CARRITO'}</span>
                        ${!p.soldout ? '<span class="btn-arrow">→</span>' : ''}
                    </button>
                </div>
            </div>
        `;
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeProductModal() {
        $('#productModal')?.classList.remove('open');
        document.body.style.overflow = '';
    }

    /* ------------------------------------------------------------
       CARRITO
       ------------------------------------------------------------ */
    function cartAdd(id, qty = 1) {
        const p = PRODUCTS.find(x => x.id === id);
        if (!p || p.soldout) return;

        const exist = state.cart.find(c => c.id === id);
        if (exist) {
            exist.qty = Math.min(exist.qty + qty, Math.max(1, p.stock || 99));
        } else {
            state.cart.push({ id, qty });
        }

        saveCart();
        renderCart();
        bumpCartCount();
        showToast(`${p.name} · agregado`);
    }

    function cartRemove(id) {
        state.cart = state.cart.filter(c => c.id !== id);
        saveCart();
        renderCart();
    }

    function cartChangeQty(id, delta) {
        const item = state.cart.find(c => c.id === id);
        const p = PRODUCTS.find(x => x.id === id);
        if (!item || !p) return;
        item.qty += delta;
        if (item.qty <= 0) { cartRemove(id); return; }
        if (p.stock) item.qty = Math.min(item.qty, p.stock);
        saveCart();
        renderCart();
    }

    function cartTotal() {
        return state.cart.reduce((sum, it) => {
            const p = PRODUCTS.find(x => x.id === it.id);
            return sum + (p ? p.price * it.qty : 0);
        }, 0);
    }

    function cartCount() {
        return state.cart.reduce((n, it) => n + it.qty, 0);
    }

    function bumpCartCount() {
        const c = $('#cartCount');
        if (!c) return;
        c.textContent = cartCount();
        c.classList.remove('bump');
        void c.offsetWidth;
        c.classList.add('bump');
    }

    function saveCart() {
        try { localStorage.setItem('fc-cart', JSON.stringify(state.cart)); } catch {}
    }
    function loadCart() {
        try {
            const s = localStorage.getItem('fc-cart');
            if (s) state.cart = JSON.parse(s);
        } catch {}
    }

    function openCart() {
        $('#cartDrawer')?.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    function closeCart() {
        $('#cartDrawer')?.classList.remove('open');
        document.body.style.overflow = '';
    }

    function renderCart() {
        const count = $('#cartCount');
        const items = $('#cartItems');
        const total = $('#cartTotal');
        const footer = $('#cartFooter');
        if (!items) return;

        count.textContent = cartCount();

        if (state.cart.length === 0) {
            items.innerHTML = `
                <div class="cart-empty" id="cartEmpty">
                    <div class="empty-mark">◻</div>
                    <span>VACÍO — AÚN NO HAY TINTA</span>
                </div>`;
            if (footer) footer.style.display = 'none';
            return;
        }

        if (footer) footer.style.display = 'flex';

        items.innerHTML = state.cart.map(it => {
            const p = PRODUCTS.find(x => x.id === it.id);
            if (!p) return '';
            const [c1] = p.art.palette;
            return `
                <div class="cart-item" data-id="${p.id}">
                    <div class="cart-item-thumb" style="color:${c1};">
                        ${p.code.split('-').slice(1).join('<br>')}
                    </div>
                    <div class="cart-item-info">
                        <div class="cart-item-name">${p.name}</div>
                        <div class="cart-item-meta">
                            <span class="cart-item-code">${p.code}</span>
                            <div class="cart-item-qty">
                                <button class="qty-btn" data-qty="-" data-id="${p.id}" aria-label="Quitar">−</button>
                                <span class="qty-val">${it.qty}</span>
                                <button class="qty-btn" data-qty="+" data-id="${p.id}" aria-label="Agregar">+</button>
                            </div>
                        </div>
                    </div>
                    <div class="cart-item-price-col">
                        <span class="cart-item-price">${p.price * it.qty}</span>
                        <button class="cart-item-remove" data-rem="${p.id}">QUITAR</button>
                    </div>
                </div>
            `;
        }).join('');

        total.textContent = fmt(cartTotal());
    }

    /* ------------------------------------------------------------
       FILTROS / ORDENAMIENTO
       ------------------------------------------------------------ */
    function bindFilters() {
        $$('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                $$('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.activeFilter = btn.dataset.filter;
                renderProducts();
            });
        });

        const sel = $('#sortSelect');
        if (sel) sel.addEventListener('change', () => {
            state.activeSort = sel.value;
            renderProducts();
        });
    }

    /* ------------------------------------------------------------
       SCROLL SPY
       ------------------------------------------------------------ */
    function bindScrollSpy() {
        const links = $$('.nav-link');
        const sections = links
            .map(l => document.getElementById(l.dataset.section))
            .filter(Boolean);

        const obs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    const id = e.target.id;
                    links.forEach(l => l.classList.toggle('active', l.dataset.section === id));
                }
            });
        }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

        sections.forEach(s => obs.observe(s));
    }

    /* ------------------------------------------------------------
       EVENTOS GENERALES
       ------------------------------------------------------------ */
    function bindEvents() {
        document.addEventListener('click', (e) => {
            const addBtn = e.target.closest('[data-add]');
            if (addBtn) {
                e.stopPropagation();
                cartAdd(addBtn.dataset.add);
                addBtn.classList.add('added');
                setTimeout(() => addBtn.classList.remove('added'), 400);
                return;
            }
            const modalAdd = e.target.closest('[data-modal-add]');
            if (modalAdd) {
                cartAdd(modalAdd.dataset.modalAdd);
                closeProductModal();
                openCart();
                return;
            }
            const card = e.target.closest('.product-card');
            if (card && !e.target.closest('.add-btn')) {
                openProductModal(card.dataset.id);
                return;
            }
            const qty = e.target.closest('[data-qty]');
            if (qty) {
                cartChangeQty(qty.dataset.id, qty.dataset.qty === '+' ? 1 : -1);
                return;
            }
            const rem = e.target.closest('[data-rem]');
            if (rem) {
                cartRemove(rem.dataset.rem);
                showToast('Pieza retirada del carrito');
                return;
            }
            if (e.target.closest('#cartBtn')) {
                openCart();
                return;
            }
            if (e.target.closest('#cartClose') || e.target.closest('#cartOverlay')) {
                closeCart();
                return;
            }
            if (e.target.closest('#modalClose') || e.target.closest('#modalOverlay')) {
                closeProductModal();
                return;
            }
            if (e.target.closest('#checkoutBtn')) {
                if (state.cart.length === 0) return;
                showToast('Pedido preparado · te escribimos por mail');
                setTimeout(() => {
                    closeCart();
                    state.cart = [];
                    saveCart();
                    renderCart();
                }, 900);
                return;
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeCart();
                closeProductModal();
            }
        });

        const form = $('#contactForm');
        if (form) form.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Mensaje transmitido · respuesta en 48h');
            form.reset();
        });
    }

    /* ------------------------------------------------------------
       EFECTOS DE ENTRADA (sutil)
       ------------------------------------------------------------ */
    function bindReveal() {
        const targets = $$('.section, .product-card, .process-step, .info-card, .contact-block, .footer-col');
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(en => {
                if (en.isIntersecting) {
                    en.target.style.opacity = '1';
                    en.target.style.transform = 'translateY(0)';
                    obs.unobserve(en.target);
                }
            });
        }, { threshold: 0.08 });

        targets.forEach(t => {
            const st = window.getComputedStyle(t);
            if (st.getPropertyValue('--skip-reveal')) return;
            t.style.opacity = '0';
            t.style.transform = 'translateY(24px)';
            t.style.transition = 'opacity .6s ease, transform .6s cubic-bezier(.2,.8,.2,1)';
            obs.observe(t);
        });
    }

    /* ------------------------------------------------------------
       INIT
       ------------------------------------------------------------ */
    function init() {
        loadCart();
        renderProducts();
        renderCart();
        bindFilters();
        bindScrollSpy();
        bindEvents();
        bindReveal();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
