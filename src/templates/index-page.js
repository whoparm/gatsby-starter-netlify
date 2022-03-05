import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  title,
  helmet,
}) => {

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-6 is-offset-1 card">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
};

const CardData = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
      />
    </Layout>
  );
};

CardData.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default CardData;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
