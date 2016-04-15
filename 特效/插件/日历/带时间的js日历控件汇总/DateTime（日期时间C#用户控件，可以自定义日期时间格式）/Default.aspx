<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="UserControl_DateTime_Default" %>

<%@ Register Src="DateTimePicker.ascx" TagName="DateTimePicker" TagPrefix="uc1" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Untitled Page</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <uc1:DateTimePicker ID="DateTimePicker1" runat="server" />
        <asp:TextBox ID="TextBox11" runat="server"></asp:TextBox>
        <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Button" />
        <br />
        <br />
        <uc1:DateTimePicker ID="DateTimePicker2" runat="server" />
   
    </div>
    </form>
</body>
</html>
