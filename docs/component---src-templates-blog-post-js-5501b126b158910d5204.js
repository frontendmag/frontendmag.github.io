(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    148: function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "pageQuery", function() {
          return A;
        });
      a(34);
      var r = a(7),
        i = a.n(r),
        n = a(0),
        s = a.n(n),
        o = a(152),
        l = a(159),
        d = a(156),
        c = a(157),
        u = a(153),
        f = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            i()(t, e),
            (t.prototype.render = function() {
              var e = this.props.data.markdownRemark,
                t = this.props.data.site.siteMetadata.title,
                a = this.props.pageContext,
                r = a.previous,
                i = a.next;
              return s.a.createElement(
                d.a,
                { location: this.props.location, title: t },
                s.a.createElement(c.a, {
                  title: e.frontmatter.title,
                  description: e.frontmatter.description || e.excerpt,
                }),
                s.a.createElement("h1", null, e.frontmatter.title),
                s.a.createElement(
                  "p",
                  {
                    style: Object.assign({}, Object(u.b)(-0.2), {
                      display: "block",
                      marginBottom: Object(u.a)(1),
                      marginTop: Object(u.a)(-1),
                    }),
                  },
                  e.frontmatter.date
                ),
                s.a.createElement("div", {
                  dangerouslySetInnerHTML: { __html: e.html },
                }),
                s.a.createElement("hr", {
                  style: { marginBottom: Object(u.a)(1) },
                }),
                s.a.createElement(l.a, null),
                s.a.createElement(
                  "ul",
                  {
                    style: {
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      listStyle: "none",
                      padding: 0,
                    },
                  },
                  s.a.createElement(
                    "li",
                    null,
                    r &&
                      s.a.createElement(
                        o.a,
                        { to: r.fields.slug, rel: "prev" },
                        "← ",
                        r.frontmatter.title
                      )
                  ),
                  s.a.createElement(
                    "li",
                    null,
                    i &&
                      s.a.createElement(
                        o.a,
                        { to: i.fields.slug, rel: "next" },
                        i.frontmatter.title,
                        " →"
                      )
                  )
                )
              );
            }),
            t
          );
        })(s.a.Component);
      t.default = f;
      var A = "3654438753";
    },
    152: function(e, t, a) {
      "use strict";
      a.d(t, "b", function() {
        return c;
      });
      var r = a(0),
        i = a.n(r),
        n = a(4),
        s = a.n(n),
        o = a(33),
        l = a.n(o);
      a.d(t, "a", function() {
        return l.a;
      });
      a(154);
      var d = i.a.createContext({}),
        c = function(e) {
          return i.a.createElement(d.Consumer, null, function(t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : i.a.createElement("div", null, "Loading (StaticQuery)");
          });
        };
      c.propTypes = {
        data: s.a.object,
        query: s.a.string.isRequired,
        render: s.a.func,
        children: s.a.func,
      };
    },
    153: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return l;
      }),
        a.d(t, "b", function() {
          return d;
        });
      var r = a(164),
        i = a.n(r),
        n = a(165),
        s = a.n(n);
      (s.a.overrideThemeStyles = function() {
        return { "a.gatsby-resp-image-link": { boxShadow: "none" } };
      }),
        delete s.a.googleFonts;
      var o = new i.a(s.a);
      var l = o.rhythm,
        d = o.scale;
    },
    154: function(e, t, a) {
      var r;
      e.exports = ((r = a(155)) && r.default) || r;
    },
    155: function(e, t, a) {
      "use strict";
      a.r(t);
      a(34);
      var r = a(0),
        i = a.n(r),
        n = a(4),
        s = a.n(n),
        o = a(55),
        l = a(2),
        d = function(e) {
          var t = e.location,
            a = l.default.getResourcesForPathnameSync(t.pathname);
          return i.a.createElement(
            o.a,
            Object.assign({ location: t, pageResources: a }, a.json)
          );
        };
      (d.propTypes = {
        location: s.a.shape({ pathname: s.a.string.isRequired }).isRequired,
      }),
        (t.default = d);
    },
    156: function(e, t, a) {
      "use strict";
      a(34);
      var r = a(7),
        i = a.n(r),
        n = a(0),
        s = a.n(n),
        o = a(152),
        l = a(153),
        d = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            i()(t, e),
            (t.prototype.render = function() {
              var e,
                t = this.props,
                a = t.location,
                r = t.title,
                i = t.children;
              return (
                (e =
                  "/" === a.pathname
                    ? s.a.createElement(
                        "h1",
                        {
                          style: Object.assign({}, Object(l.b)(1.5), {
                            marginBottom: Object(l.a)(1.5),
                            marginTop: 0,
                          }),
                        },
                        s.a.createElement(
                          o.a,
                          {
                            style: {
                              boxShadow: "none",
                              textDecoration: "none",
                              color: "inherit",
                            },
                            to: "/",
                          },
                          r
                        )
                      )
                    : s.a.createElement(
                        "h3",
                        {
                          style: {
                            fontFamily: "Montserrat, sans-serif",
                            marginTop: 0,
                          },
                        },
                        s.a.createElement(
                          o.a,
                          {
                            style: {
                              boxShadow: "none",
                              textDecoration: "none",
                              color: "inherit",
                            },
                            to: "/",
                          },
                          r
                        )
                      )),
                s.a.createElement(
                  "div",
                  {
                    style: {
                      marginLeft: "auto",
                      marginRight: "auto",
                      maxWidth: Object(l.a)(24),
                      padding: Object(l.a)(1.5) + " " + Object(l.a)(0.75),
                    },
                  },
                  s.a.createElement("header", null, e),
                  s.a.createElement("main", null, i),
                  s.a.createElement(
                    "footer",
                    null,
                    "© ",
                    new Date().getFullYear(),
                    ", Built with",
                    " ",
                    s.a.createElement(
                      "a",
                      { href: "https://www.gatsbyjs.org" },
                      "Gatsby"
                    )
                  )
                )
              );
            }),
            t
          );
        })(s.a.Component);
      t.a = d;
    },
    157: function(e, t, a) {
      "use strict";
      var r = a(158),
        i = a(0),
        n = a.n(i),
        s = a(4),
        o = a.n(s),
        l = a(166),
        d = a.n(l);
      function c(e) {
        var t = e.description,
          a = e.lang,
          i = e.meta,
          s = e.keywords,
          o = e.title,
          l = r.data.site,
          c = t || l.siteMetadata.description;
        return n.a.createElement(d.a, {
          htmlAttributes: { lang: a },
          title: o,
          titleTemplate: "%s | " + l.siteMetadata.title,
          meta: [
            { name: "description", content: c },
            { property: "og:title", content: o },
            { property: "og:description", content: c },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary" },
            { name: "twitter:creator", content: l.siteMetadata.author },
            { name: "twitter:title", content: o },
            { name: "twitter:description", content: c },
            { name: "msapplication-TileColor", content: "#f0db4f" },
            { name: "theme-color", content: "#ffffff" },
          ]
            .concat(
              s.length > 0 ? { name: "keywords", content: s.join(", ") } : []
            )
            .concat(i),
          link: [
            {
              rel: "apple-touch-icon",
              sizes: "180x180",
              href: "/apple-touch-icon.png",
            },
            {
              rel: "icon",
              type: "image/png",
              sizes: "32x32",
              href: "/favicon-32x32.png",
            },
            {
              rel: "icon",
              type: "image/png",
              sizes: "16x16",
              href: "/favicon-16x16.png",
            },
            { rel: "manifest", href: "/site.webmanifest" },
            {
              rel: "mask-icon",
              href: "/safari-pinned-tab.svg",
              color: "#f0db4f",
            },
          ],
        });
      }
      (c.defaultProps = {
        lang: "ru",
        meta: [],
        keywords: [],
        description: "",
      }),
        (c.propTypes = {
          description: o.a.string,
          lang: o.a.string,
          meta: o.a.arrayOf(o.a.object),
          keywords: o.a.arrayOf(o.a.string),
          title: o.a.string.isRequired,
        }),
        (t.a = c);
    },
    158: function(e) {
      e.exports = {
        data: {
          site: {
            siteMetadata: {
              title: "Frontend Magazine",
              description:
                "Новости, статьи и полезные материалы для фронтенд-инженеров.",
              author: "Eugene Dzhumak",
            },
          },
        },
      };
    },
    159: function(e, t, a) {
      "use strict";
      a(160);
      var r = a(162),
        i = a(0),
        n = a.n(i),
        s = a(152),
        o = a(163),
        l = a.n(o),
        d = a(153);
      var c = "4007731267";
      t.a = function() {
        return n.a.createElement(s.b, {
          query: c,
          render: function(e) {
            var t = e.site.siteMetadata,
              a = t.author,
              r = t.social;
            return n.a.createElement(
              "div",
              { style: { display: "flex", marginBottom: Object(d.a)(2.5) } },
              n.a.createElement(l.a, {
                fixed: e.avatar.childImageSharp.fixed,
                alt: a,
                style: {
                  marginRight: Object(d.a)(0.5),
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: "100%",
                },
                imgStyle: { borderRadius: "50%" },
              }),
              n.a.createElement(
                "p",
                null,
                "Written by ",
                n.a.createElement("strong", null, a),
                " who lives and works in San Francisco building useful things.",
                " ",
                n.a.createElement(
                  "a",
                  { href: "https://twitter.com/" + r.twitter },
                  "You should follow him on Twitter"
                )
              )
            );
          },
          data: r,
        });
      };
    },
    160: function(e, t, a) {
      "use strict";
      a(161)("fixed", function(e) {
        return function() {
          return e(this, "tt", "", "");
        };
      });
    },
    161: function(e, t, a) {
      var r = a(11),
        i = a(18),
        n = a(19),
        s = /"/g,
        o = function(e, t, a, r) {
          var i = String(n(e)),
            o = "<" + t;
          return (
            "" !== a &&
              (o += " " + a + '="' + String(r).replace(s, "&quot;") + '"'),
            o + ">" + i + "</" + t + ">"
          );
        };
      e.exports = function(e, t) {
        var a = {};
        (a[e] = t(o)),
          r(
            r.P +
              r.F *
                i(function() {
                  var t = ""[e]('"');
                  return t !== t.toLowerCase() || t.split('"').length > 3;
                }),
            "String",
            a
          );
      };
    },
    162: function(e) {
      e.exports = {
        data: {
          avatar: {
            childImageSharp: {
              fixed: {
                base64:
                  "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAUBAgME/8QAFwEBAQEBAAAAAAAAAAAAAAAAAgEAA//aAAwDAQACEAMQAAABtTuWpVlGTeDJ0HAG/wD/xAAbEAACAgMBAAAAAAAAAAAAAAABAgMTABEjJP/aAAgBAQABBQJzpYGe3LyGZxGLsY+mY8Yzof/EABgRAAIDAAAAAAAAAAAAAAAAAAABEBIh/9oACAEDAQE/AcKjj//EABkRAAEFAAAAAAAAAAAAAAAAAAABEBIhMf/aAAgBAgEBPwGyQmN//8QAIBAAAQIFBQAAAAAAAAAAAAAAAQARAgMQEiExQWGBkf/aAAgBAQAGPwItqmMdwNLT4n2JbCwQU/Kl90//xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhMUFR/9oACAEBAAE/IUVXGRfSl5yZEWkVrGwnd6EDTA+sdXqEbIVcO+k//9oADAMBAAIAAwAAABD76AH/xAAZEQACAwEAAAAAAAAAAAAAAAAAAREhMVH/2gAIAQMBAT8QhKbI9NMWH//EABkRAAIDAQAAAAAAAAAAAAAAAAABEBEhUf/aAAgBAgEBPxBNtovyBrT/xAAeEAEBAQACAQUAAAAAAAAAAAABEQAhMUFRYXGBkf/aAAgBAQABPxClwdnV04hQo4lO/wAzyyjjEGw+cZbkILxecbfXBH7zaeBntAmta2n5uEBbXZ4N/9k=",
                width: 50,
                height: 50,
                src:
                  "/static/4f27694bd7811d13157e5e488ad64f43/c15d6/profile-pic.jpg",
                srcSet:
                  "/static/4f27694bd7811d13157e5e488ad64f43/c15d6/profile-pic.jpg 1x,\n/static/4f27694bd7811d13157e5e488ad64f43/43c20/profile-pic.jpg 1.5x,\n/static/4f27694bd7811d13157e5e488ad64f43/da97e/profile-pic.jpg 2x,\n/static/4f27694bd7811d13157e5e488ad64f43/3e75a/profile-pic.jpg 3x",
              },
            },
          },
          site: {
            siteMetadata: {
              author: "Eugene Dzhumak",
              social: { twitter: "El4astero" },
            },
          },
        },
      };
    },
    163: function(e, t, a) {
      "use strict";
      var r = a(8);
      (t.__esModule = !0), (t.default = void 0);
      var i,
        n = r(a(7)),
        s = r(a(35)),
        o = r(a(75)),
        l = r(a(76)),
        d = r(a(0)),
        c = r(a(4)),
        u = function(e) {
          var t = (0, l.default)({}, e);
          return (
            t.resolutions && ((t.fixed = t.resolutions), delete t.resolutions),
            t.sizes && ((t.fluid = t.sizes), delete t.sizes),
            t
          );
        },
        f = Object.create({}),
        A = function(e) {
          var t = u(e),
            a = t.fluid ? t.fluid.src : t.fixed.src;
          return f[a] || !1;
        },
        p = new WeakMap();
      var h = function(e, t) {
          var a = (void 0 === i &&
            "undefined" != typeof window &&
            window.IntersectionObserver &&
            (i = new window.IntersectionObserver(
              function(e) {
                e.forEach(function(e) {
                  if (p.has(e.target)) {
                    var t = p.get(e.target);
                    (e.isIntersecting || e.intersectionRatio > 0) &&
                      (i.unobserve(e.target), p.delete(e.target), t());
                  }
                });
              },
              { rootMargin: "200px" }
            )),
          i);
          return (
            a && (a.observe(e), p.set(e, t)),
            function() {
              a.unobserve(e), p.delete(e);
            }
          );
        },
        g = function(e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            a = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
            r = e.srcSetWebp
              ? "<source type='image/webp' srcset=\"" +
                e.srcSetWebp +
                '" ' +
                a +
                "/>"
              : "",
            i = e.srcSet ? 'srcset="' + e.srcSet + '" ' : "",
            n = e.title ? 'title="' + e.title + '" ' : "",
            s = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            o = e.width ? 'width="' + e.width + '" ' : "",
            l = e.height ? 'height="' + e.height + '" ' : "",
            d = e.opacity ? e.opacity : "1",
            c = e.transitionDelay ? e.transitionDelay : "0.5s";
          return (
            "<picture>" +
            r +
            "<img " +
            o +
            l +
            a +
            i +
            t +
            s +
            n +
            (e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : "") +
            'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:' +
            c +
            ";opacity:" +
            d +
            ';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          );
        },
        m = d.default.forwardRef(function(e, t) {
          var a = e.sizes,
            r = e.srcSet,
            i = e.src,
            n = e.style,
            s = e.onLoad,
            c = e.onError,
            u = (0, o.default)(e, [
              "sizes",
              "srcSet",
              "src",
              "style",
              "onLoad",
              "onError",
            ]);
          return d.default.createElement(
            "img",
            (0, l.default)({ sizes: a, srcSet: r, src: i }, u, {
              onLoad: s,
              onError: c,
              ref: t,
              style: (0, l.default)(
                {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                },
                n
              ),
            })
          );
        });
      m.propTypes = {
        style: c.default.object,
        onError: c.default.func,
        onLoad: c.default.func,
      };
      var y = (function(e) {
        function t(t) {
          var a;
          a = e.call(this, t) || this;
          var r = !0,
            i = !1,
            n = t.fadeIn,
            o = A(t);
          !o &&
            "undefined" != typeof window &&
            window.IntersectionObserver &&
            ((r = !1), (i = !0)),
            "undefined" == typeof window && (r = !1),
            t.critical && ((r = !0), (i = !1));
          var l = !(t.critical && !t.fadeIn);
          return (
            (a.state = {
              isVisible: r,
              imgLoaded: !1,
              IOSupported: i,
              fadeIn: n,
              hasNoScript: l,
              seenBefore: o,
            }),
            (a.imageRef = d.default.createRef()),
            (a.handleImageLoaded = a.handleImageLoaded.bind(
              (0, s.default)((0, s.default)(a))
            )),
            (a.handleRef = a.handleRef.bind((0, s.default)((0, s.default)(a)))),
            a
          );
        }
        (0, n.default)(t, e);
        var a = t.prototype;
        return (
          (a.componentDidMount = function() {
            if (
              (this.state.isVisible &&
                "function" == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: A(this.props) }),
              this.props.critical)
            ) {
              var e = this.imageRef.current;
              e && e.complete && this.handleImageLoaded();
            }
          }),
          (a.componentWillUnmount = function() {
            this.cleanUpListeners && this.cleanUpListeners();
          }),
          (a.handleRef = function(e) {
            var t = this;
            this.state.IOSupported &&
              e &&
              (this.cleanUpListeners = h(e, function() {
                var e = A(t.props);
                t.state.isVisible ||
                  "function" != typeof t.props.onStartLoad ||
                  t.props.onStartLoad({ wasCached: e }),
                  t.setState({ isVisible: !0, imgLoaded: e });
              }));
          }),
          (a.handleImageLoaded = function() {
            var e, t, a;
            (e = this.props),
              (t = u(e)),
              (a = t.fluid ? t.fluid.src : t.fixed.src),
              (f[a] = !0),
              this.setState({ imgLoaded: !0 }),
              this.state.seenBefore && this.setState({ fadeIn: !1 }),
              this.props.onLoad && this.props.onLoad();
          }),
          (a.render = function() {
            var e = u(this.props),
              t = e.title,
              a = e.alt,
              r = e.className,
              i = e.style,
              n = void 0 === i ? {} : i,
              s = e.imgStyle,
              o = void 0 === s ? {} : s,
              c = e.placeholderStyle,
              f = void 0 === c ? {} : c,
              A = e.placeholderClassName,
              p = e.fluid,
              h = e.fixed,
              y = e.backgroundColor,
              b = e.Tag,
              E = e.itemProp,
              w = "boolean" == typeof y ? "lightgray" : y,
              v = (0, l.default)(
                {
                  opacity: this.state.imgLoaded ? 0 : 1,
                  transition: "opacity 0.5s",
                  transitionDelay: this.state.imgLoaded ? "0.5s" : "0.25s",
                },
                o,
                f
              ),
              S = (0, l.default)(
                {
                  opacity:
                    this.state.imgLoaded || !1 === this.state.fadeIn ? 1 : 0,
                  transition:
                    !0 === this.state.fadeIn ? "opacity 0.5s" : "none",
                },
                o
              ),
              j = {
                title: t,
                alt: this.state.isVisible ? "" : a,
                style: v,
                className: A,
              };
            if (p) {
              var B = p;
              return d.default.createElement(
                b,
                {
                  className: (r || "") + " gatsby-image-wrapper",
                  style: (0, l.default)(
                    { position: "relative", overflow: "hidden" },
                    n
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(B.srcSet),
                },
                d.default.createElement(b, {
                  style: {
                    width: "100%",
                    paddingBottom: 100 / B.aspectRatio + "%",
                  },
                }),
                w &&
                  d.default.createElement(b, {
                    title: t,
                    style: {
                      backgroundColor: w,
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      opacity: this.state.imgLoaded ? 0 : 1,
                      transitionDelay: "0.25s",
                      right: 0,
                      left: 0,
                    },
                  }),
                B.base64 &&
                  d.default.createElement(
                    m,
                    (0, l.default)({ src: B.base64 }, j)
                  ),
                B.tracedSVG &&
                  d.default.createElement(
                    m,
                    (0, l.default)({ src: B.tracedSVG }, j)
                  ),
                this.state.isVisible &&
                  d.default.createElement(
                    "picture",
                    null,
                    B.srcSetWebp &&
                      d.default.createElement("source", {
                        type: "image/webp",
                        srcSet: B.srcSetWebp,
                        sizes: B.sizes,
                      }),
                    d.default.createElement(m, {
                      alt: a,
                      title: t,
                      sizes: B.sizes,
                      src: B.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: B.srcSet,
                      style: S,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: E,
                    })
                  ),
                this.state.hasNoScript &&
                  d.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: g((0, l.default)({ alt: a, title: t }, B)),
                    },
                  })
              );
            }
            if (h) {
              var x = h,
                R = (0, l.default)(
                  {
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block",
                    width: x.width,
                    height: x.height,
                  },
                  n
                );
              return (
                "inherit" === n.display && delete R.display,
                d.default.createElement(
                  b,
                  {
                    className: (r || "") + " gatsby-image-wrapper",
                    style: R,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(x.srcSet),
                  },
                  w &&
                    d.default.createElement(b, {
                      title: t,
                      style: {
                        backgroundColor: w,
                        width: x.width,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        transitionDelay: "0.25s",
                        height: x.height,
                      },
                    }),
                  x.base64 &&
                    d.default.createElement(
                      m,
                      (0, l.default)({ src: x.base64 }, j)
                    ),
                  x.tracedSVG &&
                    d.default.createElement(
                      m,
                      (0, l.default)({ src: x.tracedSVG }, j)
                    ),
                  this.state.isVisible &&
                    d.default.createElement(
                      "picture",
                      null,
                      x.srcSetWebp &&
                        d.default.createElement("source", {
                          type: "image/webp",
                          srcSet: x.srcSetWebp,
                          sizes: x.sizes,
                        }),
                      d.default.createElement(m, {
                        alt: a,
                        title: t,
                        width: x.width,
                        height: x.height,
                        sizes: x.sizes,
                        src: x.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: x.srcSet,
                        style: S,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: E,
                      })
                    ),
                  this.state.hasNoScript &&
                    d.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: g(
                          (0, l.default)(
                            {
                              alt: a,
                              title: t,
                              width: x.width,
                              height: x.height,
                            },
                            x
                          )
                        ),
                      },
                    })
                )
              );
            }
            return null;
          }),
          t
        );
      })(d.default.Component);
      y.defaultProps = { critical: !1, fadeIn: !0, alt: "", Tag: "div" };
      var b = c.default.shape({
          width: c.default.number.isRequired,
          height: c.default.number.isRequired,
          src: c.default.string.isRequired,
          srcSet: c.default.string.isRequired,
          base64: c.default.string,
          tracedSVG: c.default.string,
          srcWebp: c.default.string,
          srcSetWebp: c.default.string,
        }),
        E = c.default.shape({
          aspectRatio: c.default.number.isRequired,
          src: c.default.string.isRequired,
          srcSet: c.default.string.isRequired,
          sizes: c.default.string.isRequired,
          base64: c.default.string,
          tracedSVG: c.default.string,
          srcWebp: c.default.string,
          srcSetWebp: c.default.string,
        });
      y.propTypes = {
        resolutions: b,
        sizes: E,
        fixed: b,
        fluid: E,
        fadeIn: c.default.bool,
        title: c.default.string,
        alt: c.default.string,
        className: c.default.oneOfType([c.default.string, c.default.object]),
        critical: c.default.bool,
        crossOrigin: c.default.oneOfType([c.default.string, c.default.bool]),
        style: c.default.object,
        imgStyle: c.default.object,
        placeholderStyle: c.default.object,
        placeholderClassName: c.default.string,
        backgroundColor: c.default.oneOfType([
          c.default.string,
          c.default.bool,
        ]),
        onLoad: c.default.func,
        onError: c.default.func,
        onStartLoad: c.default.func,
        Tag: c.default.string,
        itemProp: c.default.string,
      };
      var w = y;
      t.default = w;
    },
  },
]);
//# sourceMappingURL=component---src-templates-blog-post-js-5501b126b158910d5204.js.map
