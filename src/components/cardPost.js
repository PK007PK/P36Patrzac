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
          <h2
            className="card-title"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          ></h2>
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
            <a
              href={post.link}
              aria-label="Przejdź do pełnej treści artykułu"
              target="blank"
              className="btn btn-light"
            >
              <i className="fas fa-book-reader"></i>
            </a>
          </div>
        </div>
      </div>
    )}
  </PageContext.Consumer>
);

export default CardPost;
