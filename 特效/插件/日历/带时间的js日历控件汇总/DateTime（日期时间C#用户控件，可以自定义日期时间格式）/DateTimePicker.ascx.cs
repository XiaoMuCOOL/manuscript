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
using System.Text;
using Facet.Net.Common;

public partial class UserControl_DateTime_DateTimePicker : System.Web.UI.UserControl
{
    string dcName = "";
    string dcValue = "";
    string dcUrl = "";
    string strInputArea = "";
    DateTimeType _DisplayStyle = DateTimeType.DateTime;

    protected void Page_Load(object sender, EventArgs e)
    {
        CreateInputArea();
        CreateIFrame();
    }

    /// <summary>
    /// 获取或设置日期时间值
    /// </summary>
    public string DateTimeValue
    {
        get
        {
            if (ViewState["dcValue"] != null)
                return ViewState["dcValue"].ToString();
            else
                return "";
        }
        set
        {
            ViewState["dcValue"] = value;
        }
    }

    /// <summary>
    /// 获取或设置日期时间显示格式
    /// </summary>
    public DateTimeType DisplayStyle
    {
        get
        {
            return _DisplayStyle;
        }
        set
        {
            _DisplayStyle = value;            
        }
    }

    /// <summary>
    /// 创建输入栏位控件区域
    /// </summary>
    private void CreateInputArea()
    {
        //确定textbox控件的Name值
        if (ViewState["dcName"] == null)
        {
            ViewState["dcName"] = Facet.Net.Common.Function.GetGUID();
        }
        dcName = ViewState["dcName"].ToString();

        //确定textbox控件的Value值
        if (Request[dcName] != null)
        {
            DateTimeValue = Request[dcName].ToString();
        }
        dcValue = DateTimeValue;
        dcValue = (Request[dcName] != null && !Request[dcName].ToString().Equals("")) ? Request[dcName].ToString() : dcValue;


        dcUrl = Request.ApplicationPath + "/UserControl/DateTime/";

        StringBuilder strHtml = new StringBuilder();
        strHtml.Append("<input readonly class='plain' name='" + dcName + "' size='19' value='" + dcValue + "'>");

        switch (DisplayStyle)
        {
            case DateTimeType.Date:
                strHtml.Append("<a href='javascript:void(0)' onclick=\"if(self.gfPop_normal)gfPop_normal.fPopCalendar(document.all('" + dcName + "'));return false;\" >");
                break;
            case DateTimeType.DateTime:
                strHtml.Append("<a href='javascript:void(0)' onclick=\"if(self.gfPop_datetime)gfPop_datetime.fPopCalendar(document.all('" + dcName + "'));return false;\" >");
                break;
            case DateTimeType.Time:
                strHtml.Append("<a href='javascript:void(0)' onclick=\"if(self.gfPop_Time)gfPop_Time.fPopCalendar(document.all('" + dcName + "'));return false;\" >");
                break;
            default:
                strHtml.Append("<a href='javascript:void(0)' onclick=\"if(self.gfPop_normal)gfPop_normal.fPopCalendar(document.all('" + dcName + "'));return false;\" >");
                break;
        }

        strHtml.Append("<img name='popcal' align='absmiddle' src='" + dcUrl + "calbtn.gif' width='34' height='22' border='0'></a>");
        strInputArea = strHtml.ToString();
        this.lit1.Text = strInputArea;
    }

    /// <summary>
    /// 创建IFrame区域
    /// </summary>
    private void CreateIFrame()
    {
        StringBuilder strScript = new StringBuilder();
        strScript.Append("<script language=\"javascript\">");

        //Date      YYYY-MM-DD
        strScript.Append("document.write(\"<iframe width=188 height=166 " +
                        "name='gToday:Date:agenda.js:gfPop_normal:plugins_Date.js' " +
                        "id  ='gToday:Date:agenda.js:gfPop_normal:plugins_Date.js' " +
                        "src ='" + dcUrl + "ipopeng.htm' scrolling='no' frameborder='0' style='visibility:visible; z-index:999; position:absolute; top:-500px; left:-500px;'>\");");
        //DateTime  YYYY-MM-DD HH:mm
        strScript.Append("document.write(\"<iframe width=188 height=166 " +
                        "name='gToday:datetime:agenda.js:gfPop_datetime:plugins_DateTime.js' " +
                        "id  ='gToday:datetime:agenda.js:gfPop_datetime:plugins_DateTime.js' " +
                        "src ='" + dcUrl + "ipopeng.htm' scrolling='no' frameborder='0' style='visibility:visible; z-index:999; position:absolute; top:-500px; left:-500px;'>\");");
        //Time      HH:mm
        strScript.Append("document.write(\"<iframe width=188 height=166 " +
                        "name='gToday:datetime:agenda.js:gfPop_Time:plugins_Time.js' " +
                        "id  ='gToday:datetime:agenda.js:gfPop_Time:plugins_Time.js' " +
                        "src ='" + dcUrl + "ipopeng.htm' scrolling='no' frameborder='0' style='visibility:visible; z-index:999; position:absolute; top:-500px; left:-500px;'>\");");


        strScript.Append("document.write(\"</iframe>\");");
        strScript.Append("</script>");

        Page.ClientScript.RegisterStartupScript(typeof(string), "Startup", strScript.ToString());        
    }

}
