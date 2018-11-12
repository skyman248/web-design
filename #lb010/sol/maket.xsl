<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <xsl:template match="/">
        <html>
            <link rel="stylesheet" type="text/css" href="styles.css" />
            <body>
                <header>
                    Логотип фирмы<br/><br/><br/>
                </header>
                <div id="menu">
                    Главное меню сайта
                    <hr/>
                    <p><a href="XMLcompany.xml">Контакты</a></p>
                    <p><a href="XMLDEP001.xml">Расчетный</a></p>
                    <p><a href="XMLDEP002.xml">Аналитический</a></p>
                </div>
                <xsl:apply-templates select="company"/>
                <xsl:apply-templates select="sotr"/>
                <footer>Практическое занятие 3</footer>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>