import { connect } from 'react-redux';
import { incrementScore, clearScore } from './scoreboard.actions'
import ScoreBoard from '../components/scoreboard';

const mapStateToProps = ({ score }) => ({
    score: score.value,
});

const mapDispatchToProps = {
    incrementScore,
    clearScore,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScoreBoard)