import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import type { FaqItem, ProductInfo } from '../../../types/product.types';
import './FAQ.css';

interface FAQProps {
  faqList: FaqItem[];
  product: ProductInfo;
}

export const FAQ: React.FC<FAQProps> = ({ faqList, product }) => {
  const [openIds, setOpenIds] = useState<string[]>([faqList[0]?.id || '']);

  const toggleItem = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section id="faq" className="section faq-section">
      <div className="container container-narrow">
        {/* Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">
            <HelpCircle size={14} />
            <span>Pertanyaan Umum (FAQ)</span>
          </div>
          <h2 className="section-title">Jawaban Seputar Produk & Dukungan</h2>
          <p className="section-subtitle">
            Temukan jawaban atas pertanyaan yang paling sering diajukan mengenai fungsionalitas, lisensi, dan pemeliharaan {product.name}.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-accordion-list reveal-on-scroll reveal-delay-1">
          {faqList.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div key={faq.id} className={`faq-item ${isOpen ? 'open' : ''}`} id={`faq-${faq.id}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-icon-wrapper">
                    <ChevronDown size={18} className={`chevron-icon ${isOpen ? 'rotate' : ''}`} />
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer-pane" id={`faq-answer-${faq.id}`} role="region">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
