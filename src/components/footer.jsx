function Footer() {

    return <footer className="page-footer orange lighten-2">
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Алямкина Ксения, Гайлевич Светлана ТКБО-03-21
            <a className="grey-text text-lighten-4 right" href="https://github.com/keygecat/react-spa">Repository</a>
            </div>
          </div>
    </footer>
}

export { Footer };