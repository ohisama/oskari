define([
	"oskari",
	"jquery",
	"src/oskari/base/module",
	"../../mapping/mapmodule-plugin/map-module",
	"../../mapping/mapmodule-plugin/plugin/MapPlugin",
	"../../mapping/mapmodule-plugin/plugin/MapLayerPlugin",
	"./plugin/panbuttons/PanButtons",
	"../../mapping/mapmodule-plugin/plugin/layers/LayersPlugin",
	"bundles/framework/bundle/mapmodule-plugin/request/MapLayerVisibilityRequest",
	"../../mapping/mapmodule-plugin/request/MapLayerVisibilityRequestHandler",
	"../../mapping/mapmodule-plugin/request/MapMoveRequestHandler",
	"./ui/module/map-module",
	"bundles/framework/bundle/mapmodule-plugin/plugin/Plugin",
	"bundles/framework/bundle/mapmodule-plugin/plugin/controls/ControlsPlugin",
	"bundles/framework/bundle/mapmodule-plugin/plugin/controls/PorttiKeyboard",
	"bundles/framework/bundle/mapmodule-plugin/plugin/controls/PorttiMouse",
	"bundles/framework/bundle/mapmodule-plugin/request/DisableMapKeyboardMovementRequest",
	"bundles/framework/bundle/mapmodule-plugin/request/DisableMapMouseMovementRequest",
	"bundles/framework/bundle/mapmodule-plugin/request/EnableMapKeyboardMovementRequest",
	"bundles/framework/bundle/mapmodule-plugin/request/EnableMapMouseMovementRequest",
	"bundles/framework/bundle/mapmodule-plugin/request/MapMovementControlsRequestHandler",
	"../../../sources/framework/request/common/show-map-measurement-request",
	"bundles/framework/bundle/mapmodule-plugin/plugin/getinfo/GetFeatureInfoHandler",
	"bundles/framework/bundle/mapmodule-plugin/request/GetFeatureInfoRequest",
	"bundles/framework/bundle/mapmodule-plugin/request/GetFeatureInfoActivationRequest",
	"bundles/framework/bundle/mapmodule-plugin/plugin/getinfo/GetInfoPlugin",
	"css!resources/framework/bundle/mapmodule-plugin/plugin/getinfo/css/getinfo.css",
	"bundles/framework/bundle/mapmodule-plugin/plugin/markers/MarkersPlugin",
	"bundles/framework/bundle/mapmodule-plugin/request/RemoveMarkerRequest",
	"bundles/framework/bundle/mapmodule-plugin/request/MarkerRequestHandler",
	"bundles/framework/bundle/mapmodule-plugin/plugin/search/SearchPlugin",
	"bundles/framework/bundle/search/service/searchservice",
	"css!resources/framework/bundle/mapmodule-plugin/plugin/search/css/search.css",
	"bundles/framework/bundle/mapmodule-plugin/plugin/logo/LogoPlugin",
	"css!resources/framework/bundle/mapmodule-plugin/plugin/logo/css/logoplugin.css",
	"bundles/framework/bundle/mapmodule-plugin/plugin/datasource/DataSourcePlugin",
	"css!resources/framework/bundle/mapmodule-plugin/plugin/datasource/css/datasource.css",
	"bundles/framework/bundle/mapmodule-plugin/plugin/indexmap/IndexMapPlugin",
	"css!resources/framework/bundle/mapmodule-plugin/plugin/indexmap/css/indexmap.css",
	"bundles/framework/bundle/mapmodule-plugin/plugin/scalebar/ScaleBarPlugin",
	"bundles/framework/bundle/mapmodule-plugin/plugin/fullscreen/FullScreen",
	"css!resources/framework/bundle/mapmodule-plugin/plugin/fullscreen/css/fullscreen.css",
	"bundles/framework/bundle/mapmodule-plugin/plugin/layers/LayerSelectionPlugin",
	"css!resources/framework/bundle/mapmodule-plugin/plugin/layers/css/layersselection.css",
	"bundles/framework/bundle/mapmodule-plugin/request/MapMoveByLayerContentRequest",
	"bundles/framework/bundle/mapmodule-plugin/request/MapMoveByLayerContentRequestHandler",
	"bundles/framework/bundle/mapmodule-plugin/event/MapLayerVisibilityChangedEvent",
	"./plugin/wmslayer/WmsLayerPlugin",
	"./plugin/wmtslayer/WmtsLayerPlugin",
	"./plugin/wmtslayer/WmtsLayer",
	"./plugin/wmtslayer/WmtsLayerModelBuilder",
	"bundles/framework/bundle/mapmodule-plugin/plugin/vectorlayer/VectorLayerPlugin",
	"bundles/framework/bundle/mapmodule-plugin/plugin/location/GeoLocationPlugin",
	"bundles/framework/bundle/mapmodule-plugin/request/ToolSelectionRequest",
	"bundles/framework/bundle/mapmodule-plugin/plugin/controls/ToolSelectionHandler",
	"bundles/framework/bundle/mapmodule-plugin/request/MapLayerUpdateRequest",
	"bundles/framework/bundle/mapmodule-plugin/request/MapLayerUpdateRequestHandler",
	"bundles/framework/bundle/mapmodule-plugin/event/MapClickedEvent",
	"bundles/framework/bundle/mapmodule-plugin/event/EscPressedEvent",
	"bundles/framework/bundle/mapmodule-plugin/event/GetInfoResultEvent",
	"bundles/framework/bundle/mapmodule-plugin/event/MapSizeChangedEvent",
	"bundles/framework/bundle/mapmodule-plugin/request/ClearHistoryRequest",
	"bundles/framework/bundle/mapmodule-plugin/plugin/controls/ClearHistoryHandler",
	"bundles/framework/bundle/mapmodule-plugin/plugin/zoombar/Portti2Zoombar",
	"css!resources/framework/bundle/mapmodule-plugin/plugin/portti2zoombar/css/porttizoombar.css",
	"./plugin/panbuttons/PanButtons",
	"css!resources/framework/bundle/mapmodule-plugin/plugin/panbuttons/css/panbuttons.css",
	"css!resources/framework/bundle/mapmodule-plugin/css/mapmodule.css",
	"bundles/framework/bundle/mapmodule-plugin/locale/fi",
	"bundles/framework/bundle/mapmodule-plugin/locale/sv",
	"bundles/framework/bundle/mapmodule-plugin/locale/en"
],
function(Oskari, jQuery) {
	return Oskari.bundleCls("mapmodule-plugin").category({
		create: function() {
			return this;
		},
		update: function(manager, bundle, bi, info) {
			manager.alert("RECEIVED update notification " + info);
		}
	})
});