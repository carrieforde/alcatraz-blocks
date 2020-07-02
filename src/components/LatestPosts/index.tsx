import React, { Component } from 'react';
import { Block } from '../../interfaces/block.interface';
import classnames from 'classnames';
import ReactHtmlParser from 'react-html-parser';

interface State {
  posts: any[];
}

const INITIAL_STATE = {
  posts: [],
};

const BASE_URL = 'http://alcatraz.local';

class LatestPosts extends Component<Block> {
  state: State = INITIAL_STATE;

  componentDidMount() {
    fetch(`${BASE_URL}/wp-json/wp/v2/posts${this.queryParams}`)
      .then((res) => res.json())
      .then((r) => this.setState({ posts: r }));
  }

  get queryParams(): string {
    const { attrs } = this.props.block;
    const { order, orderBy } = attrs;
    const params: { [key: string]: string } = Object.assign(
      {},
      { order, orderBy }
    );
    let string = '';

    Object.keys(params).forEach((param) => {
      if (params[param] !== undefined) {
        if (string === '') {
          string = `?${param}=${params[param]}`;
        } else {
          string += `&${param}=${params[param]}`;
        }
      }
    });

    return string;
  }

  getPostDate(date: string): string {
    return new Intl.DateTimeFormat('en-US').format(new Date(date));
  }

  render() {
    const { attrs } = this.props.block;
    const {
      displayPostContent,
      displayPostContentRadio,
      displayPostDate,
      postLayout,
      columns,
    } = attrs;
    const { posts } = this.state;
    const classes = classnames(
      'wp-block-latest-posts wp-block-latest-posts__list',
      {
        'is-grid': postLayout === 'grid',
        [`columns-${columns}`]: postLayout === 'grid',
      }
    );

    return (
      <ul className={classes}>
        {posts.map((post, index) => {
          const { title, content, excerpt, link, date } = post;
          return (
            <li key={index}>
              <a href={link}>{title.rendered}</a>
              {displayPostDate && (
                <time dateTime={date}>{this.getPostDate(date)}</time>
              )}
              {displayPostContent &&
                displayPostContentRadio === undefined &&
                ReactHtmlParser(excerpt.rendered)}

              {displayPostContentRadio === 'full_post' &&
                ReactHtmlParser(content.rendered)}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default LatestPosts;
