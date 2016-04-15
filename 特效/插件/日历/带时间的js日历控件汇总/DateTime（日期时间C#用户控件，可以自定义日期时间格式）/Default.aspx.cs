using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using Facet.Net.Common;

public partial class UserControl_DateTime_Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {        
        this.DateTimePicker1.DisplayStyle = DateTimeType.Date;
        this.DateTimePicker1.DateTimeValue = "2006-4-5";

        this.DateTimePicker2.DateTimeValue = "12:13";
        this.DateTimePicker2.DisplayStyle = DateTimeType.DateTime;
        
        if (!Page.IsPostBack)
        {
            string str = "<script language='javascript'>document.write('a')</script>";
            Page.ClientScript.RegisterStartupScript(typeof(string), "key1", str);
            //str = "<script language='javascript'>document.write('b')</script>";
            Page.ClientScript.RegisterStartupScript(typeof(string), "key2", str);
        }
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        //if (this.DateTimePicker1.DisplayStyle == DateTimeType.DateTime)
        //    this.DateTimePicker1.DisplayStyle = DateTimeType.Time;
        //else
        //    this.DateTimePicker1.DisplayStyle = DateTimeType.DateTime;
    }
}
