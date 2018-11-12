<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <xsl:include href="maket.xsl"/>

    <xsl:template match="sotr">
        <div id="content">
            Список сотрудников отдела: <xsl:value-of select="@name"/>
            <hr/>
            <xsl:for-each select="s">
                <xsl:value-of select="@name"/>&#160;
                <xsl:value-of select="@fam"/><br/>
            </xsl:for-each>        
        </div>
    </xsl:template>
</xsl:stylesheet>