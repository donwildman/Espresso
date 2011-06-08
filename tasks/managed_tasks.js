// ==========================================================================
// Project:   The M-Project - Mobile HTML5 Application Framework
// Copyright: �2010 M-Way Solutions GmbH. All rights reserved.
// Creator:   alexander
// Date:      08.11.2010
// License:   Dual licensed under the MIT or GPL Version 2 licenses.
//            http://github.com/mwaylabs/The-M-Project/blob/master/MIT-LICENSE
//            http://github.com/mwaylabs/The-M-Project/blob/master/GPL-LICENSE
// ==========================================================================


var ManagedTasks

/*
 * ESPRESSO
 */
ManagedTasks = exports.ManagedTasks = {};
ManagedTasks.Tasks = new Array();

/*
 * The Tasks
 */
ManagedTasks.Tasks['dependency']  =  require('./task_dependency').Task_Dependency;
ManagedTasks.Tasks['jslint']      =  require('./task_jslint').Task_JSLINT;
ManagedTasks.Tasks['merge']       =  require('./task_merge').Task_Merge;
ManagedTasks.Tasks['void']        =  require('./task_void').Task_Void;
ManagedTasks.Tasks['contentType'] =  require('./task_contentType').Task_ContentType;
ManagedTasks.Tasks['manifest']    =  require('./task_manifest').Task_Manifest;
ManagedTasks.Tasks['preSort']     =  require('./task_preSort').Task_PreSort;
ManagedTasks.Tasks['minify']      =  require('./task_minify').Task_Minify;
ManagedTasks.Tasks['sass']        =  require('./task_sass').Task_SASS;
ManagedTasks.Tasks['markLibrary'] =  require('./task_markLibrary').Task_MarkLibrary;
ManagedTasks.Tasks['markCore']    =  require('./task_markCoreFiles').Task_MarkCoreFiles;
ManagedTasks.Tasks['collectMDefsAndRefs'] = require('./task_collectMDefsAndRefs').Task;
ManagedTasks.Tasks['mergeApp'] = require('./task_mergeApp').Task;
ManagedTasks.Tasks['cacheFiles'] = require('./task_cacheFiles').Task;
ManagedTasks.Tasks['analyze'] = require('./task_analyze').Task;

