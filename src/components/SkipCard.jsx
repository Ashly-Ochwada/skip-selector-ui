import React from 'react';

function SkipCard({ skip, isSelected, onSelect }) {
  const price = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0
  }).format(skip.size * 50);

  return (
    <button
      onClick={onSelect}
      className={`skip-card ${isSelected ? 'selected' : ''}`}
    >
      <img
        src={skip.image || '/container.png'}
        alt={`${skip.size}-yard skip`}
      />
      <h4>{skip.size} Yard Skip</h4>
      <p>{skip.hire_period_days}-day hire</p>
      <strong>{price}</strong>
      <span className="skip-badge">{isSelected ? 'Selected' : 'Select'}</span>
    </button>
  );
}

export default SkipCard;
