<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body>
  <h2>Задание 1: Список студентов, сдававших Информатику</h2>
  <xsl:apply-templates/>
  </body>
  </html>
</xsl:template>

<xsl:template match="student[predmet[@name='Информатика'][@value!='0']]">
  <p>
  <xsl:apply-templates select="@fam"/>&#160;
  <xsl:apply-templates select="@name"/>&#160;
  <xsl:apply-templates select="@sname"/>
  </p>
</xsl:template>

</xsl:stylesheet>

<!--
<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:key name='avg' match='/group/student' use="sum(predmet/@value) div count(predmet)"/>
    <xsl:template match="/">
        <html><body>
            <h1>Задание 1: Список студентов, сдававших Информатику</h1>
            <hr/>
                <xsl:for-each select="/group/student[predmet[@name='Информатика'][@value!='0']]">
                        <p>
                        &#160;&#160;
                        <xsl:value-of select="@fam"/>&#160;
                        <xsl:value-of select="@name"/>&#160;
                        <xsl:value-of select="@sname"/>
                        </p>
                </xsl:for-each>
            <hr/>
            <hr/>
            <h1>Задание 2: Список студентов, имеющих двойки</h1>
            <hr/>
            
                <xsl:for-each select="/group/student">
                    <xsl:if test="predmet[@value='2']">
                    
                        <p>
                        &#160;&#160;
                        <xsl:value-of select="@fam"/>&#160;
                        <xsl:value-of select="@name"/>&#160;
                        <xsl:value-of select="@sname"/>
                        </p>
                    
                    </xsl:if>
                </xsl:for-each>
            
            <hr/>
            <hr/>
            <h1>Задание 3: Список студентов, имеющих только пятерки</h1>
            <hr/>
            
                <xsl:for-each select="/group/student">
                        <xsl:if test="count(predmet[@value='5']) = count(predmet)">
                        
                            <p>
                            &#160;&#160;
                            <xsl:value-of select="@fam"/>&#160;
                            <xsl:value-of select="@name"/>&#160;
                            <xsl:value-of select="@sname"/>
                            </p>
                        
                        </xsl:if>
                    
                </xsl:for-each>
            
            <hr/>
            <hr/>
            <h1>Задание 4: Список студентов со средним баллом</h1>
            <hr/>
            
                <xsl:for-each select="/group/student">
                    <xsl:variable name='avg' select="sum(predmet/@value) div count(predmet)"/>
                        
                        <xsl:choose>
                            <xsl:when test="$avg &gt; 4">
                            <p>
                            &#160;&#160;
                            <b>
                            <xsl:value-of select="@fam"/>&#160;
                            <xsl:value-of select="@name"/>&#160;
                            <xsl:value-of select="@sname"/>
                            &#160;-&#160;
                            <xsl:value-of select="$avg"/>
                            </b>
                            </p>
                            </xsl:when>
                            
                            <xsl:when test="$avg &lt; 3">
                            <p>
                            <i>
                            &#160;&#160;
                            <xsl:value-of select="@fam"/>&#160;
                            <xsl:value-of select="@name"/>&#160;
                            <xsl:value-of select="@sname"/>
                            &#160;-&#160;
                            <xsl:value-of select="$avg"/>
                            </i>
                            </p>
                            </xsl:when>

                            <xsl:otherwise>
                            <p>
                            &#160;&#160;
                            <xsl:value-of select="@fam"/>&#160;
                            <xsl:value-of select="@name"/>&#160;
                            <xsl:value-of select="@sname"/>
                            &#160;-&#160;
                            <xsl:value-of select="$avg"/>
                            </p>
                            </xsl:otherwise>
                        </xsl:choose>
                        
                </xsl:for-each>
            
            <hr/>
            <hr/>
        </body></html>
    </xsl:template>
</xsl:stylesheet>
-->