import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const PriceTable = () => {
  const { t, language } = useLanguage();
  const tableData = t('home.priceTable') || { headers: {}, rows: [] };

  return (
    <section style={{ padding: '100px 0', background: 'var(--surface)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="text-gradient" style={{ fontSize: '42px', fontWeight: '900', marginBottom: '20px' }}>{tableData.title}</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>{tableData.desc}</p>
        </div>

        <div style={{ overflowX: 'auto', borderRadius: '32px', boxShadow: 'var(--shadow-lg)', border: '1px solid white', background: 'white' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '700px' }}>
            <thead>
              <tr style={{ background: '#f1f5f9', borderBottom: '2px solid #e2e8f0' }}>
                <th style={{ padding: '24px', textAlign: 'left', fontWeight: '900', color: 'var(--secondary)', fontSize: '18px' }}>{tableData.headers?.treatment}</th>
                <th style={{ padding: '24px', textAlign: 'left', fontWeight: '800', color: 'var(--text-muted)' }}>{tableData.headers?.uk}</th>
                <th style={{ padding: '24px', textAlign: 'left', fontWeight: '800', color: 'var(--text-muted)' }}>{tableData.headers?.usa}</th>
                <th style={{ padding: '24px', textAlign: 'left', fontWeight: '900', color: 'var(--primary)', background: '#eff6ff' }}>{tableData.headers?.tr}</th>
                <th style={{ padding: '24px', textAlign: 'left', fontWeight: '900', color: 'var(--accent)' }}>{tableData.headers?.save}</th>
              </tr>
            </thead>
            <tbody>
              {tableData.rows && tableData.rows.map((row, i) => (
                <motion.tr 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="hover:bg-slate-50" 
                  style={{ borderBottom: i === 4 ? 'none' : '1px solid #f1f5f9' }}
                >
                  <td style={{ padding: '24px', fontWeight: '800', color: 'var(--secondary)', fontSize: '16px' }}>{row.name}</td>
                  <td style={{ padding: '24px', color: 'var(--text-muted)' }}>{row.uk}</td>
                  <td style={{ padding: '24px', color: 'var(--text-muted)' }}>{row.usa}</td>
                  <td style={{ padding: '24px', fontWeight: '800', color: 'var(--primary)', background: '#eff6ff' }}>{row.tr}</td>
                  <td style={{ padding: '24px' }}>
                    <span style={{ background: 'var(--accent-light)', color: 'var(--accent)', padding: '6px 14px', borderRadius: '100px', fontWeight: '800', fontSize: '14px' }}>
                      {row.save}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PriceTable;
