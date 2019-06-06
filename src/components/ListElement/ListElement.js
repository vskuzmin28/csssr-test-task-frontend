import React from 'react';
import { Link } from 'react-router-dom';
import { DateTime } from 'luxon';
import './ListElement.css';

const ListElement = ({ imgSrc, username, issueNum, title, dateOfRaise, id }) => (
  <li className="list-result__item">
    <Link className='list-result__link' to={`detail/${id}`}>
      {imgSrc && (
        <span>
          <img className='list-result__avatar' src={imgSrc} alt="" />
        </span>
      )}
      <div className='list-result__content'>
        <span>{`Юзер: ${username} / `}</span>
        <span>{`№: ${issueNum} / `}</span>
        <span>{`Название: ${title} / `}</span>
        <span className='list-result__date'>
          {`Добавлено: ${DateTime.fromISO(dateOfRaise).toLocaleString(DateTime.DATE_FULL)}`}
        </span>
      </div>
    </Link>
  </li>
);

export default ListElement;
