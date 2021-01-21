import React from "react";

import { PageContext } from "../components/layout";

const CardPost = ({ post, className }) => (
  <PageContext.Consumer>
    {({ dark }) => (
      <div
        className={
          dark
            ? "card bg-dark ".concat(className)
            : "card bg-light ".concat(className)
        }
      >
        <div className="card-body">
          <h3
            className="card-title"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          ></h3>
          <p
            className="card-text"
            dangerouslySetInnerHTML={{
              __html: post.excerpt.rendered,
            }}
          />
        </div>
        <div className="card-footer">
          <div className="card-body d-flex justify-content-between align-items-center">
            <small className="text-muted">
              Opublikowano: {post.date.slice(0, 10)}
            </small>
            <a href={post.link} target="blank" className="btn btn-light">
              <i class="fas fa-book-reader"></i>
            </a>
          </div>
        </div>
      </div>
    )}
  </PageContext.Consumer>
);

export default CardPost;
