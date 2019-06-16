/// <reference no-default-lib="true"/>
/// <reference path="include/generated/PluginSecurity.d.ts" />

declare const plugin: Plugin;

declare function settings(): GlobalSettings;

interface GlobalSettings extends GenericSettings {
	DebugSettings: DebugSettings;
	GameSettings: GameSettings;
	LuaSettings: LuaSettings;
	NetworkSettings: NetworkSettings;
	PhysicsSettings: PhysicsSettings;
	RenderSettings: RenderSettings;
	Studio: Studio;
}
