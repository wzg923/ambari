/**
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements. See the NOTICE file distributed with this
 * work for additional information regarding copyright ownership. The ASF
 * licenses this file to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

var App = require('app');

/**
 * @class
 *
 * This is a view for showing HBase Cluster Requests
 *
 * @extends App.ChartLinearTimeView
 * @extends Ember.Object
 * @extends Ember.View
 */
App.ChartServiceMetricsFlume_SinkDrainSuccessCount = App.ChartLinearTimeView.extend({
  id: "service-metrics-flume-sink-drain-success",
  title: Em.I18n.t('services.service.info.metrics.flume.sinkDrainSuccess'),

  ajaxIndex: 'service.metrics.flume.sink_drain_success',

  seriesTemplate: {
    path: 'metrics.flume.flume.SINK',
    displayName: function (name, hostName) {
      return Em.I18n.t('services.service.info.metrics.flume.sinkName').format(name + ' (' + hostName + ')');
    },
    flumePropertyName: 'EventDrainSuccessCount'
  },

  getData: function (jsonData) {
    return this.getFlumeData(jsonData);
  }
});
