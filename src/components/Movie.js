import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Logo from '../logo.svg'

import { Link } from 'react-router-dom'

export class Movie extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  render() {
    const { id, poster, title, year } = this.props

    const posterLogo = poster === 'N/A' ? Logo : poster

    return (
      <Link to={`/detail/${id}`} className="card">
        <div className="card-image">
          <figure className="image">
            <img
              alt={title}
              src={ posterLogo }
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">{year}</p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}
