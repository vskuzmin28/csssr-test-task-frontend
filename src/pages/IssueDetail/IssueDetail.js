import React, { Component } from 'react';
import { connect } from 'react-redux';
import Selectors from '../../selectors';
import Avatar from '../../components/Avatar';

class IssueDetail extends Component {
  render() {
    const { match, issues } = this.props;

    return (
      <>
        <h2 className='main__title'>Детальная информация</h2>

        
        {Selectors.getExactIssue(issues, match.params.issueId).map(i => (
          <div className='detail-block' key={i.id}>
            
            {i.user.avatar_url && (
              <Avatar className='detail-block__avatar' url={i.user.avatar_url} caption={i.user.login} />
            )}
            <div className='detail-block__desc'>
              <p>ID: {match.params.issueId}</p>
              <p>{`Автор: ${i.user.login}`}</p>
              <p>{`URL: ${i.user.html_url}`}</p>
              <p>{`Статус: ${i.state}`}</p>
              <p>{`Комментариев: ${i.comments}`}</p>
            </div>
          </div>
        ))}

      </>
    );
  }
}

const mapStateToProps = state => ({
  issues: state.issues.issues
});

export default connect(
  mapStateToProps,
  null
)(IssueDetail);
