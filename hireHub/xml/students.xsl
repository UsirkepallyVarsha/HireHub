<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
<html>
<head>
<title>HireHub Student Data</title>
<style>
table {
  border-collapse: collapse;
  width: 80%;
  margin: auto;
}
th, td {
  border: 1px solid black;
  padding: 10px;
  text-align: center;
}
th {
  background-color: #1f2933;
  color: white;
}
</style>
</head>

<body>
<h2 align="center">HireHub Students</h2>

<table>
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Branch</th>
<th>CGPA</th>
<th>Attendance</th>
<th>Mobile</th>
</tr>

<xsl:for-each select="students/student">
<tr>
<td><xsl:value-of select="@id"/></td>
<td><xsl:value-of select="name"/></td>
<td><xsl:value-of select="email"/></td>
<td><xsl:value-of select="branch"/></td>
<td><xsl:value-of select="cgpa"/></td>
<td><xsl:value-of select="attendance"/></td>
<td><xsl:value-of select="mobile"/></td>
</tr>
</xsl:for-each>

</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
