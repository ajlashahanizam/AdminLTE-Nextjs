import React, { Component } from "react";
import AdminHeader from "./admin.header";
import AdminSidebar from "./admin.menu";
import AdminFooter from "./admin.footer";
import AdminContent from "./admin.content";

export default class AdminHOC extends Component {
  render() {
    return (
      <div>
        {this.props.showHeader && <AdminHeader />}
        <AdminSidebar />
        <AdminContent title={this.props.contentTitle}>
          {this.props.children}
        </AdminContent>
        <AdminFooter />
      </div>
    );
  }
}
