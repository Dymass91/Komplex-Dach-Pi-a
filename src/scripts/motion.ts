// Animacje GSAP + ScrollTrigger.
// Ładowane dynamicznie i tylko wtedy, gdy użytkownik nie ogranicza ruchu.
// Bez JS / przy prefers-reduced-motion cała treść jest od razu widoczna.

declare global {
  interface Window { __kdMotion?: boolean }
}

export async function initMotion() {
  const root = document.documentElement;
  if (!root.classList.contains('js-motion')) return;
  window.__kdMotion = true;

  const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: 'expo.out', duration: 1.1 });

  // --- Hero --------------------------------------------------------------
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  if (hero) {
    const tl = gsap.timeline({ delay: 0.1 });
    const media = hero.querySelector('[data-hero-media]');
    if (media) tl.fromTo(media, { scale: 1.14, opacity: 0 }, { scale: 1, opacity: 1, duration: 2.2, ease: 'power3.out' }, 0);
    tl.fromTo(hero.querySelectorAll('[data-hero-line] > span'), { y: 0, yPercent: 105 }, { yPercent: 0, duration: 1.2, stagger: 0.09 }, 0.25);
    tl.fromTo(hero.querySelectorAll('[data-hero-fade]'), { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.08 }, 0.7);
    tl.fromTo(hero.querySelectorAll('[data-hero-rise]'), { y: 24 }, { y: 0, duration: 1.2, stagger: 0.08 }, 0.7);

    // Parallax tła hero przy przewijaniu
    if (media) {
      gsap.to(media, {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
      });
    }
    const content = hero.querySelector('[data-hero-content]');
    if (content) {
      gsap.to(content, {
        y: -60,
        opacity: 0.2,
        ease: 'none',
        scrollTrigger: { trigger: hero, start: 'center center', end: 'bottom top', scrub: true },
      });
    }
  }

  // --- Ujawnianie tekstu i bloków ------------------------------------------
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 88%',
    once: true,
    onEnter: (els) => gsap.fromTo(els, { opacity: 0, y: 28 }, { opacity: 1, y: 0, stagger: 0.08, duration: 1 }),
  });

  // --- Ujawnianie zdjęć (clip-path + delikatny zoom) -------------------------
  gsap.utils.toArray<HTMLElement>('[data-reveal-img]').forEach((el) => {
    const img = el.querySelector('img');
    const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 85%', once: true } });
    tl.fromTo(el, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: 'expo.inOut' });
    if (img) tl.fromTo(img, { scale: 1.25 }, { scale: 1, duration: 1.8, ease: 'expo.out' }, 0.1);
  });

  // --- Liczniki --------------------------------------------------------------
  gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count);
    const obj = { v: 0 };
    gsap.to(obj, {
      v: target,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      onUpdate: () => (el.textContent = String(Math.round(obj.v))),
    });
  });

  // --- Mapa obszaru: pierścienie i punkty -------------------------------------
  const map = document.querySelector<SVGElement>('[data-area-map]');
  if (map) {
    const tl = gsap.timeline({ scrollTrigger: { trigger: map, start: 'top 75%', once: true } });
    tl.from(map.querySelectorAll('[data-ring]'), { scale: 0.2, opacity: 0, transformOrigin: '50% 50%', stagger: 0.12, duration: 1.4 })
      .from(map.querySelectorAll('[data-town]'), { opacity: 0, y: 6, stagger: 0.025, duration: 0.6 }, 0.5)
      .from(map.querySelector('[data-center]'), { scale: 0, transformOrigin: '50% 100%', duration: 0.9, ease: 'back.out(2)' }, 0.3);
  }

  // --- Tylko desktop: parallax i przejścia sekcji -----------------------------
  const mm = gsap.matchMedia();
  mm.add('(min-width: 768px)', () => {
    gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
      const amount = Number(el.dataset.parallax || 10);
      gsap.fromTo(
        el,
        { yPercent: -amount / 2 },
        { yPercent: amount / 2, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } },
      );
    });

    // Ciemna sekcja „rozwija się” z zaokrąglonej karty na pełną szerokość
    gsap.utils.toArray<HTMLElement>('[data-clip-in]').forEach((el) => {
      gsap.fromTo(
        el,
        { clipPath: 'inset(0% 3% 0% 3% round 28px)' },
        { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'none', scrollTrigger: { trigger: el, start: 'top 95%', end: 'top 35%', scrub: true } },
      );
    });

    // Pozioma linia postępu w sekcjach z [data-progress]
    gsap.utils.toArray<HTMLElement>('[data-progress]').forEach((el) => {
      gsap.fromTo(el, { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', ease: 'none', scrollTrigger: { trigger: el.closest('section'), start: 'top 70%', end: 'bottom 60%', scrub: true } });
    });
  });

  // Po załadowaniu obrazów przelicz pozycje
  window.addEventListener('load', () => ScrollTrigger.refresh());
}
