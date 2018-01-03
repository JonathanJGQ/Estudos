<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<body>
    Resultado da busca:
    <ul>
        <c:forEach var="empresa" items="${empresas}">
        	<li>${empresa.getId()}: ${empresa.getNome()}</li>
        </c:forEach>
    </ul>
</body>
</html>