import React, {Component} from 'react';
import { render } from '@testing-library/react';
export const Tournament = props => (
<div className="col-md-3 col-sm-6 col-6">
    <a href={props.data.uri}>
        <div className="card mr-card">
            <div className="card-body np">
                <div className="t_title_top">
                    <span className="pull-left"></span>
                    <span className="pull-right"></span>
                        {/* <span ng-show="t.status!='Ended' &amp;&amp; t.status!='Live' &amp;&amp; t.is_finished==0"><timer end-time="t.startTime" class="ng-binding ng-isolate-scope">00:00:00:00</timer></span>
                        <span ng-show="t.status=='Live' &amp;&amp; t.is_finished==0" className="ng-binding ng-hide">ЯГ ОДОО</span>
                        <span ng-show="t.is_finished==1">ЯГ ОДОО</span> */}
                </div>
                <img src={props.data.bg_image} className="img-responsive tbg br20"/>
                <div className={'t_title_bot bg-'+props.data.sp_class}><span className="pull-left ng-binding"><i className="icon-csgo"></i> {props.data.name}</span></div>
            </div>
        </div>
    </a>
</div>);
