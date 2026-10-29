import { useEffect, useRef, useState } from 'react';
import type { ReactNode, KeyboardEvent } from 'react';
import { X } from 'lucide-react';

export function ContentDialog({ title, onClose, children, wide = false }: { title: string; onClose: () => void; children: ReactNode; wide?: boolean }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [closing, setClosing] = useState(false);
  const requestClose = () => setClosing(true);
  const containFocus = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key !== 'Tab') return;
    const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('button:not(:disabled), a[href], select, [tabindex="0"]'));
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (!first) { event.preventDefault(); return; }
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  };
  useEffect(() => {
    const dialog = ref.current;
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const before = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = 'hidden';
    return () => { dialog?.close(); document.body.style.overflow = before; trigger?.focus(); };
  }, []);
  return <dialog ref={ref} className={`content-dialog ${wide ? 'wide-dialog' : ''} ${closing ? 'is-closing' : ''}`} aria-labelledby="content-dialog-title" onKeyDown={containFocus} onCancel={event => { event.preventDefault(); requestClose(); }} onAnimationEnd={event => { if (closing && event.target === event.currentTarget && event.animationName.includes('surface-exit')) onClose(); }} onClick={event => { if (event.target === event.currentTarget) { const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) requestClose(); } }}><div className="dialog-header"><h2 id="content-dialog-title">{title}</h2><button className="icon-button" aria-label="Tutup dialog" onClick={requestClose} autoFocus><X size={21} /></button></div><div className="dialog-body">{children}</div></dialog>;
}
