/* eslint-disable indent */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable react/require-default-props */
/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export default function Statistics({ title, stats }) {
    const colors = ['#FF69B4', '#6495ED', '#FFD700', '#32CD32', '#FF8C00'];
    return (
        <section className={styles.statistics}>
            {title ? <h2 className={styles.title}>{title}</h2> : ''}

            <ul className={styles.statList}>
                {stats.map(({ id, label, percentage }, index) => (
                    <li
                      className={styles.item}
                      key={id}
                      style={{ backgroundColor: colors[index] }}
                    >
                        <span className={styles.label}>{label}</span>
                        <span className={styles.percentage}>
                            {percentage}
                            %
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

Statistics.defaultProps = {
    title: '',
    stats: [],
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
};
