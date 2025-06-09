import React, { useEffect, useState, useCallback, useMemo } from 'react';
import {fetchSkipsByLocation} from '../services/skipsApi';
import SkipCard from '../components/SkipCard';
import './ChooseSkip.css';

function ChooseSkip() {
  const [skips, setSkips] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const getSkips = async () => {
      try {
        const data = await fetchSkipsByLocation('NR32', 'Lowestoft');
        setSkips(data);
      } catch (err) {
        console.error('Failed to fetch skips:', err);
      }
    };
    getSkips();
  }, []);

  const handleSelect = useCallback((id) => {
    setSelected(id);
  }, []);

  const selectedSkip = useMemo(() => skips.find((s) => String(s.id) === String(selected)), [selected, skips]);

  const handleContinue = useCallback(() => {
    console.log('Proceed with:', selectedSkip);
  }, [selectedSkip]);

  return (
    <div className="choose-container">
      <h2>Choose Your Skip Size</h2>
  
      <div className="skip-wrapper">
        <div className="skip-grid">
          {skips.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              isSelected={String(selected) === String(skip.id)}
              onSelect={() => handleSelect(skip.id)}
            />
          ))}
        </div>
      </div>
  
      {selectedSkip && (
        <footer className="skip-footer">
          <div className="footer-content">
            <span>
              Selected: {selectedSkip.size} Yard •{' '}
              {new Intl.NumberFormat('en-GB', {
                style: 'currency',
                currency: 'GBP',
                minimumFractionDigits: 0
              }).format(selectedSkip.size * 50)}
            </span>
            <button onClick={handleContinue} className="btn-primary">
              Continue →
            </button>
          </div>
        </footer>
      )}
    </div>
  );
  
}

export default ChooseSkip;
