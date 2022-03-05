import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  title1,
  title2,
  helmet,
}) => {

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-6  card">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title1}
            </h1>
          </div>
          <div className="column is-6  card">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title2}

            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

IndexPageTemplate.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
};

const CardData = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title1={frontmatter.title1}
        title2={frontmatter.title2}
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
        title1
        title2
      }
    }
  }
`;
