import React, { Component } from 'react';
import ReactSelect from 'react-select';
import { connect } from 'react-redux';
import {
  handleUserNameChange,
  handleRepoNameChange,
  handleSearchButtonClick,
  handlePagesizeChange,
  handleNextPageClick,
  handlePrevPageClick
} from '../../actions/issues';
import { getUserRepos } from '../../actions/repos';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ListContainer from '../../components/ListContainer';
import ListElement from '../../components/ListElement';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Select from '../../components/Select';
import Cosmonaut from '../../components/Cosmonaut/Cosmonaut';

class IssuesHome extends Component {
  componentDidMount() {
    this.getRepos();
  }

  handleSearchButtonHit = () => {
    const { repoName, repoUser } = this.props;
    const { handleSearchButtonClick } = this.props;

    handleSearchButtonClick(repoUser, repoName);
  };

  handlePagesizeChange = pageSize => {
    const { handlePagesizeChange } = this.props;

    handlePagesizeChange(pageSize);
    this.handleSearchButtonHit();
  };

  handlePageChange = direction => {
    const { page, issues } = this.props;
    const { handleNextPageClick, handlePrevPageClick } = this.props;

    switch (direction) {
      case 'prev':
        if (page === 1) return;
        handlePrevPageClick();
        if (!issues[page - 1]) this.handleSearchButtonHit();
        break;

      case 'next':
        handleNextPageClick();
        if (!issues[page + 1]) this.handleSearchButtonHit();
        break;

      default:
        return;
    }
  };

  getRepos = () => {
    const { getUserRepos } = this.props;
    const { repoUser, repos } = this.props;

    if (!repoUser || repos[repoUser]) return;

    getUserRepos(repoUser);
  };

  handleRepoChange = repoKV => {
    const { handleRepoNameChange } = this.props;

    const { value } = repoKV;
    handleRepoNameChange(value);
  };

  renderRequestStatus = () => {
    const { isLoading, error } = this.props;

    if (isLoading) return <Loading />;
    else if (error) return <Error message={error} />;
    else return null;
  };

  renderIssues = () => {
    const { issues, page } = this.props;

    if (!issues[page]) return null;
    else if (!issues[page].length) return <Error message="No more results!" />;
    else
      return (
        <ListContainer>
          {issues[page].map(i => (
            <ListElement
              key={i.id}
              id={i.id}
              imgSrc={i.user.avatar_url}
              username={i.user.login}
              issueNum={i.number}
              title={i.title}
              dateOfRaise={i.created_at}
            />
          ))}
        </ListContainer>
      );
  };

  renderPagination = () => {
    const { page, issues } = this.props;

    const isBtnDisabled = index => !issues[index] || !issues[index].length;

    const isPrevBtnDisabled = page - 1 < 1;
    const isNextBtnDisabled = isBtnDisabled(page);

    return (
      <>
        <div className='pagination'>
          <Button
            className={'button pagination__button'}
            disabled={isPrevBtnDisabled}
            text="<"
            onButtonHit={() => this.handlePageChange('prev')}
          />
          <span className='pagination__status'>Страница: {page}</span>
          <Button
            className={'button pagination__button'}
            disabled={isNextBtnDisabled}
            text=">"
            onButtonHit={() => this.handlePageChange('next')}
          />
        </div>
      </>
    );
  };

  render() {
    const { repoName, repoUser, repos } = this.props;
    const { handleUserNameChange } = this.props;

    const repoOptions = repos[repoUser]
      ? repos[repoUser].map(r => ({ label: r.name, value: r.name }))
      : [];

    const repoKV = { label: repoName, value: repoName };

    return (
      <div className='main container__main'>
        <h2 className='main__title'>Тестовый квест «Интерфейс Github»</h2>
        <div className='main__card card'>
          <h3 className='card__title'>Карточка поиска</h3>

          <div className='card__inputs'>

            <Input onBlur={this.getRepos} onTextChange={handleUserNameChange} value={repoUser} />
            <p className='card__label'>Гитнейм</p>

            <ReactSelect
              name="Repo name:"
              onChange={this.handleRepoChange}
              options={repoOptions}
              value={repoKV}
            />
            <p className='card__label'>Репозиторий</p>

            <div className='card__number-of-results'>
              <p className='card__number-of-results__title'>Количество результатов:</p>
              <Select className='card__number-of-results__select' from={1} to={5} onChange={v => this.handlePagesizeChange(v)} />
            </div>

            <Button className='button card__button' text="Поехали" onButtonHit={this.handleSearchButtonHit} />

          </div>
        </div>

        <div className='result main__result'>
          <h3 className='result__title'>Карточка результатов</h3>
          <Cosmonaut className='cosmonaut result__cosmonaut' />
          {this.renderIssues()}
          {this.renderPagination()}
          {this.renderRequestStatus()}
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  repoName: state.UIData.repoName,
  repoUser: state.UIData.repoUser,
  isLoading: state.UIData.isLoading,
  error: state.UIData.errMessage,
  issues: state.issues.issues,
  page: state.issues.page,
  repos: state.repos.repos
});

const mapDispatchToProps = {
  handleRepoNameChange,
  handleUserNameChange,
  handleSearchButtonClick,
  handlePagesizeChange,
  handleNextPageClick,
  handlePrevPageClick,
  getUserRepos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssuesHome);
