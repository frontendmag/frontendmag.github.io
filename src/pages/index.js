import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "components/layout";
import SEO from "components/seo";
import Footer from "components/Footer/Footer";
import { rhythm } from "utils/typography";
import ReadingTimeEstimate from "components/ReadingTimeEstimate/ReadingTimeEstimate";
import "./index.css";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Фронтенд разработка"
          keywords={[
            `блог`,
            `фронтенд`,
            `javascript`,
            `react`,
            `программирование`,
            `frontend`,
            `frontend magazine`,
            `переводы`,
          ]}
        />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>
                <time>{node.frontmatter.date}</time>
                &nbsp;
                ·
                &nbsp;
                <ReadingTimeEstimate
                  minutes={Math.round(node.fields.readingTime.minutes)}
                />
              </small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          );
        })}
        <Footer />
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM YYYY", locale: "ru")
            title
            description
          }
          fields {
            readingTime {
              minutes
            }
          }
        }
      }
    }
  }
`;
