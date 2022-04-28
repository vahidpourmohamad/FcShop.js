import React from 'react'
import Testomonialcardcmp from './Testomonialcardcmp';
import './TestomonialCmp.css'
import { TestomonialDummy } from './TestomonialDummy';
export default function TestomonialCmp() {
  return (
    <div className="TestParallax-Container">
      <div className="TesParallax-parent">
        <div className="TesParallax-Parallax">
          {TestomonialDummy.map((comment, id) => (
            <Testomonialcardcmp
              id={id}
              Author={comment.Author}
              Rate={comment.Rate}
              Text={comment.Text}
              ProductName={comment.ProductName}
              date={comment.date}
              approved={comment.approved}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
