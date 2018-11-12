<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <xsl:include href="maket.xsl"/>

    <xsl:template match="company">
        <div id="content">
                    Контакты компании: <xsl:value-of select="@name"/>
                    <hr/>
                    Адрес: <xsl:value-of select="adress"/>
                    <br/>Tелефон: <xsl:value-of select="telefon"/>
                    <br/>Электронная почта: <xsl:value-of select="mail"/>
        </div>
    </xsl:template>
</xsl:stylesheet>