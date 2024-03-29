sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        var oEventValue;
        var oEventObj;
        var company_code;
        var Document_Type;
        var vendor;
        var language;;
        var Purchase_Organization;
        var Purchase_Group;
        var Currency;
        var Start_Date;
        var End_Date;
        var arrKey=[]
        var arrValue=[]


        return Controller.extend("project3.controller.View3", {
            onInit: function () {
                sap.ui.core.UIComponent.getRouterFor(this).getRoute('RouteView3').attachPatternMatched(this._onRouteMatched, this)
            },

            _onRouteMatched: function (oEvent) {
                 oEventValue=oEvent.mParameters.arguments.invoicePath;
                 oEventObj=JSON.parse(window.decodeURIComponent(oEventValue))
                 company_code=oEventObj.company_code;
                 Document_Type=oEventObj.Document_Type
                 vendor=oEventObj.vendor;
                 language=oEventObj.language;
                 Purchase_Organization=oEventObj.Purchase_Organization;
                 Purchase_Group=oEventObj.Purchase_Group;
                 Currency=oEventObj.Currency;
                 Start_Date=oEventObj.Start_Date;
                 End_Date=oEventObj.End_Date;
                 arrKey.push("company_code","Document_Type","vendor","language","Purchase_Organization","Purchase_Group","Currency","Start_Date","End_Date")
                 arrValue.push(company_code,Document_Type,vendor,language,Purchase_Organization,Purchase_Group,Currency,Start_Date,End_Date)
                 for(let i=0;i<arrKey.length;i++){
                 if(arrValue[i]=="Hide"){
                    this.getView().byId(arrKey[i]).setVisible(false)
                 }
                    // console.log(this.getView().byId(arr[i]));
                 }

                

                //  console.log("company_code",company_code);
                //  console.log("Document_Type",Document_Type);
                //  console.log("vendor",vendor);
                //  console.log("language",language);
                //  console.log("Purchase_Organization",Purchase_Organization);
                //  console.log("Purchase_Group",Purchase_Group);
                //  console.log("Currency",Currency);
                //  console.log("Start_Date",Start_Date);
                //  console.log("End_Date",End_Date);


            }
        });
    });