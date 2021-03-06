import React, { Component } from 'react'

class Widecard extends Component {
    render() {
        return (
            <div class="widecard">
            <div class="compdet">
            <h3>{this.props.title}</h3>
            <table cellPadding="0">
                <tr>
                    <td><h4 class="secondtext">{this.props.where}</h4></td>
                    <td>{this.props.logo}</td>
                </tr>
            </table>
            
            <h4 class="secondtext">{this.props.from} - {this.props.to}</h4>
            </div>
            </div>
            )
        }
    }
    
export default Widecard
    