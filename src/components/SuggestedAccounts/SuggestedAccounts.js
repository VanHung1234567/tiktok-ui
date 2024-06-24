import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import AccountItem from './AcountItem';
import styles from './SuggestedAccoutns.module.scss';

const cx = classNames.bind(styles);

function SuggestedAccoutns({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

SuggestedAccoutns.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccoutns;
