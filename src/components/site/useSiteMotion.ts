import { useEffect } from 'react';

export function useSiteMotion() {
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let dispose = () => {};
    const start = () => {
      dispose();
      const animations: Animation[] = [];
      const hero = document.querySelector<HTMLElement>('.new-hero');
      const observers: IntersectionObserver[] = [];
      const end = () => {
        observers.forEach(observer => observer.disconnect());
        animations.forEach(animation => animation.cancel());
        if (hero) hero.dataset.heroActive = 'false';
      };
      dispose = end;
      if (media.matches || !('IntersectionObserver' in window)) return;

      if (hero) {
        let inView = false;
        const update = () => { hero.dataset.heroActive = String(inView && !document.hidden); };
        const observer = new IntersectionObserver(entries => { inView = entries[0].isIntersecting; update(); });
        observer.observe(hero);
        observers.push(observer);
        document.addEventListener('visibilitychange', update);
        dispose = () => { end(); document.removeEventListener('visibilitychange', update); };
      }

      // Hero staggered entrance animation runs on mount
      const heroTargets = document.querySelectorAll<HTMLElement>('.new-hero h1, .hero-lead, .hero-actions, .hero-product-stage');
      heroTargets.forEach((target, index) => {
        animations.push(target.animate([
          { opacity: 0.15, transform: `translateY(${index === 3 ? 24 : 14}px)` },
          { opacity: 1, transform: 'translateY(0)' },
        ], { duration: index === 3 ? 800 : 600, delay: index * 75, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards' }));
      });

      const targets = document.querySelectorAll<HTMLElement>(
        '.section-heading, .flow-strip-inner, .module-card, .all-features, .node-pipeline-motion-banner, .workflow-layout, .preview-theater, .addons-category-strip, .addons-empty-state, .addons-catalog-grid, .download-card, .requirements-section-new, .installation-steps > li, .faq-list details, .repository-panel, .team-card, .principle-list > div, .thanks-section, .team-invitation, .footer-main > div'
      );
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          if (!target.dataset.motionPlayed) {
            target.dataset.motionPlayed = 'true';
            
            // Stagger detection if target is in a list or grid
            let delay = 0;
            const parent = target.parentElement;
            if (parent && (
              parent.classList.contains('module-grid') ||
              parent.classList.contains('installation-steps') ||
              parent.classList.contains('team-grid') ||
              parent.classList.contains('principle-list') ||
              parent.classList.contains('feature-directory') ||
              parent.classList.contains('faq-list') ||
              parent.classList.contains('footer-main')
            )) {
              const siblings = Array.from(parent.children);
              const index = siblings.indexOf(target);
              if (index > 0) delay = Math.min(index * 70, 350);
            }

            animations.push(target.animate([
              { opacity: 0.15, transform: 'translateY(24px) scale(0.98)' },
              { opacity: 1, transform: 'translateY(0) scale(1)' },
            ], { 
              duration: 650, 
              delay,
              easing: 'cubic-bezier(.16,1,.3,1)',
              fill: 'both'
            }));
          }
          observer.unobserve(target);
        });
      }, { threshold: .1, rootMargin: '0px 0px -40px 0px' });
      targets.forEach(target => observer.observe(target));
      observers.push(observer);
    };
    start();
    media.addEventListener('change', start);
    return () => { dispose(); media.removeEventListener('change', start); };
  }, []);
}
