interface AnimationController extends Instance {
	GetPlayingAnimationTracks(this: AnimationController): Array<AnimationTrack>;
	LoadAnimation(this: AnimationController, animation: Animation): AnimationTrack;
}

interface Animator extends Instance {
	LoadAnimation(this: Animator, animation: Animation): AnimationTrack;
	GetPlayingAnimationTracks(this: Animator): Array<AnimationTrack>;
}

/** @rbxts server */
interface AssetService extends Instance {
	CreatePlaceInPlayerInventoryAsync(
		this: AssetService,
		player: Player,
		placeName: string,
		templatePlaceID: number,
		description?: string,
	): number;
	GetGamePlacesAsync(this: AssetService): StandardPages<{ Name: string; PlaceId: number }>;
	GetAssetIdsForPackage(this: AssetService, packageAssetId: number): Array<number>;
	GetBundleDetailsAsync(this: AssetService, bundleId: number): BundleInfo;
}

interface Attachment extends Instance {
	WorldCFrame: CFrame;
}

interface BadgeService extends Instance {
	/** @rbxts server */
	AwardBadge(this: BadgeService, userId: number, badgeId: number): boolean;
	/** @rbxts server */
	GetBadgeInfoAsync(this: BadgeService, badgeId: number): BadgeInfo;
	/** @rbxts server */
	UserHasBadgeAsync(this: BadgeService, userId: number, badgeId: number): boolean;
}

interface BasePart extends PVInstance {
	readonly TouchEnded: RBXScriptSignal<(otherPart: BasePart) => void>;
	readonly Touched: RBXScriptSignal<(otherPart: BasePart) => void>;
	CanCollideWith(this: BasePart, part: BasePart): boolean;
	GetConnectedParts(this: BasePart, recursive?: boolean): Array<BasePart>;
	GetRootPart(this: BasePart): BasePart;
	GetJoints(this: BasePart): Array<Constraint | JointInstance>;
	GetTouchingParts(this: BasePart): Array<BasePart>;
	/** @rbxts server */
	SubtractAsync(
		this: BasePart,
		parts: Array<BasePart>,
		collisionfidelity?: CastsToEnum<Enum.CollisionFidelity>,
	): UnionOperation;
	/** @rbxts server */
	UnionAsync(
		this: BasePart,
		parts: Array<BasePart>,
		collisionfidelity?: CastsToEnum<Enum.CollisionFidelity>,
	): UnionOperation;

	/** @rbxts server */
	CanSetNetworkOwnership(this: BasePart): LuaTuple<[boolean, string | undefined]>;
	/** @rbxts server */
	GetNetworkOwner(this: BasePart): Player | undefined;
	/** @rbxts server */
	SetNetworkOwner(this: BasePart, playerInstance?: Player): void;
	/** @rbxts server */
	GetNetworkOwnershipAuto(this: BasePart): boolean;
	/** @rbxts server */
	SetNetworkOwnershipAuto(this: BasePart): void;
}

interface BillboardGui extends LayerCollector {
	Adornee: PVInstance | Attachment | undefined;
	PlayerToHideFrom: Player | undefined;
}

interface BindableEvent extends Instance {
	readonly Event: RBXScriptSignal<(...arguments: Array<unknown>) => void, true>;
	Fire(this: BindableEvent, ...arguments: Array<unknown>): void;
}

interface BindableFunction extends Instance {
	OnInvoke: (...arguments: Array<unknown>) => any;
	Invoke(this: BindableFunction, ...arguments: Array<unknown>): Array<unknown>;
}

interface Camera extends Instance {
	CameraSubject: Humanoid | BasePart | undefined;
	GetPartsObscuringTarget(this: Camera, castPoints: Array<Vector3>, ignoreList: Array<Instance>): Array<Instance>;
	WorldToScreenPoint(this: Camera, worldPoint: Vector3): LuaTuple<[Vector3, boolean]>;
	WorldToViewportPoint(this: Camera, worldPoint: Vector3): LuaTuple<[Vector3, boolean]>;
}

interface Chat extends Instance {
	readonly Chatted: RBXScriptSignal<(part: BasePart, message: string, color: Enum.ChatColor) => void>;
	FilterStringAsync(this: Chat, stringToFilter: string, playerFrom: Player, playerTo: Player): string;
	FilterStringForBroadcast(this: Chat, stringToFilter: string, playerFrom: Player): string;
}

interface CollectionService extends Instance {
	GetInstanceAddedSignal(this: CollectionService, tag: string): RBXScriptSignal<(instance: Instance) => void>;
	GetInstanceRemovedSignal(this: CollectionService, tag: string): RBXScriptSignal<(instance: Instance) => void>;
	GetTagged<T extends Instance>(this: CollectionService, tag: string): Array<Instance>;
	GetTags(this: CollectionService, instance: Instance): Array<string>;
}

interface CompressorSoundEffect extends SoundEffect {
	SideChain?: Sound | SoundGroup;
}

interface ContentProvider extends Instance {
	PreloadAsync(this: ContentProvider, contentIdList: Array<Instance>): void;
}

/** @rbxts client */
interface ContextActionService extends Instance {
	BindAction(
		this: ContextActionService,
		actionName: string,
		functionToBind: (actionName: string, state: Enum.UserInputState, inputObject: InputObject) => void,
		createTouchButton: boolean,
		...inputTypes: Array<Enum.KeyCode | Enum.PlayerActions | Enum.UserInputType>
	): void;

	BindActionAtPriority(
		this: ContextActionService,
		actionName: string,
		functionToBind: (actionName: string, state: Enum.UserInputState, inputObject: InputObject) => void,
		createTouchButton: boolean,
		priorityLevel: number,
		...inputTypes: Array<Enum.KeyCode | Enum.PlayerActions | Enum.UserInputType>
	): void;
	GetButton(this: ContextActionService, actionName: string): ImageButton | undefined;
	GetAllBoundActionInfo(this: ContextActionService): Map<string, BoundActionInfo>;
	GetBoundActionInfo(this: ContextActionService, actionName: string): BoundActionInfo;
}

interface DataModel extends ServiceProvider<Services> {
	readonly Workspace: Workspace;
	BindToClose(this: DataModel, callback: () => void): void;
}

interface DataStorePages extends Pages<{ key: string; value: unknown }> {}

/** @rbxts server */
interface DataStoreService extends Instance {
	GetDataStore(this: DataStoreService, name: string, scope?: string): GlobalDataStore;
	GetGlobalDataStore(this: DataStoreService): GlobalDataStore;
	GetOrderedDataStore(this: DataStoreService, name: string, scope?: string): OrderedDataStore;
}

interface Dialog extends Instance {
	readonly DialogChoiceSelected: RBXScriptSignal<(player: Player, dialogChoice: Dialog) => void>;
	GetCurrentPlayers(this: Dialog): Array<Player>;
}

interface Dragger extends Instance {
	MouseDown(this: Dragger, mousePart: BasePart, pointOnMousePart: Vector3, parts: Array<BasePart>): void;
}

interface FriendPages
	extends Pages<{ AvatarFinal: boolean; AvatarUri: string; Id: number; Username: string; IsOnline: boolean }> {}

interface GamePassService extends Instance {
	/** This item is deprecated. Do not use it for new work. */
	PlayerHasPass(this: GamePassService, player: Player, gamePassId: number): boolean;
}

interface GenericSettings<S = unknown> extends ServiceProvider<S> {}

/** @rbxts server */
interface GlobalDataStore extends Instance {
	GetAsync<T>(this: GlobalDataStore, key: string): T | undefined;
	IncrementAsync(this: GlobalDataStore, key: string, delta?: number): number;
	RemoveAsync<T>(this: GlobalDataStore, key: string): T | undefined;
	SetAsync(this: GlobalDataStore, key: string, value?: any): void;
	UpdateAsync<O, R>(
		this: GlobalDataStore,
		key: string,
		transformFunction: (oldValue: O | undefined) => R,
	): R extends undefined ? O | undefined : R;
}

interface GroupService extends Instance {
	GetAlliesAsync(this: GroupService, groupId: number): StandardPages<GroupInfo>;
	GetEnemiesAsync(this: GroupService, groupId: number): StandardPages<GroupInfo>;
	GetGroupInfoAsync(this: GroupService, groupId: number): GroupInfo;
	GetGroupsAsync(this: GroupService, userId: number): Array<GetGroupsAsyncResult>;
}

interface GuiObject extends GuiBase2d {
	readonly InputBegan: RBXScriptSignal<(input: InputObject) => void>;
	readonly InputChanged: RBXScriptSignal<(input: InputObject) => void>;
	readonly InputEnded: RBXScriptSignal<(input: InputObject) => void>;
	readonly TouchLongPress: RBXScriptSignal<(touchPositions: Array<Vector2>, state: Enum.UserInputState) => void>;
	readonly TouchPan: RBXScriptSignal<
		(
			touchPositions: Array<Vector2>,
			totalTranslation: Vector2,
			velocity: Vector2,
			state: Enum.UserInputState,
		) => void
	>;
	readonly TouchPinch: RBXScriptSignal<
		(touchPositions: Array<Vector2>, scale: number, velocity: number, state: Enum.UserInputState) => void
	>;
	readonly TouchRotate: RBXScriptSignal<
		(touchPositions: Array<Vector2>, rotation: number, velocity: number, state: Enum.UserInputState) => void
	>;
	readonly TouchTap: RBXScriptSignal<(touchPositions: Array<Vector2>) => void>;

	TweenPosition(
		this: GuiObject,
		endPosition: UDim2,
		easingDirection?: CastsToEnum<Enum.EasingDirection>,
		easingStyle?: CastsToEnum<Enum.EasingStyle>,
		time?: number,
		override?: boolean,
		callback?: (finishedTween: Enum.TweenStatus) => void,
	): boolean;

	TweenSize(
		this: GuiObject,
		endSize: UDim2,
		easingDirection?: CastsToEnum<Enum.EasingDirection>,
		easingStyle?: CastsToEnum<Enum.EasingStyle>,
		time?: number,
		override?: boolean,
		callback?: (finishedTween: Enum.TweenStatus) => void,
	): boolean;

	TweenSizeAndPosition(
		this: GuiObject,
		endSize: UDim2,
		endPosition: UDim2,
		easingDirection?: CastsToEnum<Enum.EasingDirection>,
		easingStyle?: CastsToEnum<Enum.EasingStyle>,
		time?: number,
		override?: boolean,
		callback?: (finishedTween: Enum.TweenStatus) => void,
	): boolean;
}

/** @rbxts client */
interface GuiService extends Instance {
	AddSelectionParent(this: GuiService, selectionName: string, selectionParent: GuiObject): void;
	AddSelectionTuple(this: GuiService, selectionName: string, selections: Array<GuiObject>): void;
	InspectPlayerFromHumanoidDescription(
		this: GuiService,
		humanoidDescription: HumanoidDescription,
		name: string,
	): void;
	GetGuiInset(this: GuiService): LuaTuple<[Vector2, Vector2]>;
}

interface HttpService extends Instance {
	/** @rbxts server */
	GetAsync(this: HttpService, url: string, nocache?: boolean, headers?: HttpHeaders): string;

	/** @rbxts server */
	PostAsync(
		this: HttpService,
		url: string,
		data: string,
		content_type?: CastsToEnum<Enum.HttpContentType>,
		compress?: boolean,
		headers?: HttpHeaders,
	): string;

	/** @rbxts server */
	RequestAsync(this: HttpService, requestOptions: RequestAsyncRequest): RequestAsyncResponse;

	JSONDecode<T>(this: HttpService, input: string): T;
}

interface Humanoid extends Instance {
	readonly AnimationPlayed: RBXScriptSignal<(animationTrack: AnimationTrack) => void>;
	readonly Seated: RBXScriptSignal<(active: boolean, currentSeatPart: Seat | VehicleSeat) => void>;
	readonly Touched: RBXScriptSignal<(touchingPart: BasePart, humanoidPart: BasePart) => void>;
	GetAppliedDescription(this: Humanoid): HumanoidDescription;
	GetPlayingAnimationTracks(this: Humanoid): Array<AnimationTrack>;
	LoadAnimation(this: Humanoid, animation: Animation): AnimationTrack;
	GetAccessories(this: Humanoid): Array<Accessory>;
}

/** #### Related methods:
 * - Humanoid.ApplyDescription()
 * - Humanoid.GetAppliedDescription()
 * - Player.LoadCharacterWithHumanoidDescription()
 * - Players.GetHumanoidDescriptionFromOutfitId()
 * - Players.GetHumanoidDescriptionFromUserId()
 */
interface HumanoidDescription extends Instance {}

interface InsertService extends Instance {
	LoadAsset(this: InsertService, assetId: number): Model;
	LoadAssetVersion(this: InsertService, assetVersionId: number): Model;
	GetBaseSets(this: InsertService): Array<SetInfo>;
	GetCollection(this: InsertService, categoryId: number): Array<CollectionInfo>;
	GetFreeDecals(this: InsertService, searchText: string, pageNum: number): [Array<FreeSearchResult>];
	GetFreeModels(this: InsertService, searchText: string, pageNum: number): [Array<FreeSearchResult>];
	GetUserSets(this: InsertService, userId: number): Array<SetInfo>;
}

interface Instance {
	Clone(this: Instance): this;
	/** `Instance.Changed` has been intentionally excluded from the roblox-ts type system to maintain soundness with the ValueBase objects.
	 * Please intersect your type with the `ChangedSignal` global type to unsafely access the `Instance.Changed` event.
	 * @example
	 * function f(p: Part) {
	 * 	(p as Part & ChangedSignal).Changed.Connect(changedPropertyName => {})
	 * }
	 */
	Changed: unknown;
	GetChildren(this: Instance): Array<Instance>;
	GetDescendants(this: Instance): Array<Instance>;

	WaitForChild(this: Instance, childName: string): Instance;
	WaitForChild(this: Instance, childName: string, timeOut: number): Instance | undefined;

	IsA<T extends keyof Instances>(this: Instance, className: T): this is Instances[T];

	FindFirstAncestorWhichIsA<T extends keyof Instances>(this: Instance, className: T): Instances[T] | undefined;

	FindFirstChildWhichIsA<T extends keyof Instances>(
		this: Instance,
		className: T,
		recursive?: boolean,
	): Instances[T] | undefined;

	FindFirstAncestorOfClass<T extends keyof StrictInstances>(
		this: Instance,
		className: T,
	): StrictInstances[T] | undefined;

	FindFirstChildOfClass<T extends keyof StrictInstances>(
		this: Instance,
		className: T,
	): StrictInstances[T] | undefined;

	GetPropertyChangedSignal(this: Instance, propertyName: InstanceProperties<this>): RBXScriptSignal;
}

interface InventoryPages extends Pages<number> {}

interface JointInstance extends Instance {
	Part0?: BasePart;
	Part1?: BasePart;
}

interface JointsService extends Instance {
	SetJoinAfterMoveInstance(this: JointsService, joinInstance: PVInstance): void;
	SetJoinAfterMoveTarget(this: JointsService, joinTarget: PVInstance): void;
}

interface Keyframe extends Instance {
	GetPoses(this: Keyframe): Array<Pose>;
	AddMarker(this: Keyframe, marker: KeyframeMarker): void;
	RemoveMarker(this: Keyframe, marker: KeyframeMarker): void;
	GetMarkers(this: Keyframe): Array<KeyframeMarker>;
}

interface KeyframeSequence extends Instance {
	GetKeyframes(this: KeyframeSequence): Array<Keyframe>;
}

interface KeyframeSequenceProvider extends Instance {
	GetAnimations(this: KeyframeSequenceProvider, userId: number): InventoryPages;
	GetKeyframeSequenceAsync(this: KeyframeSequenceProvider, assetId: string): KeyframeSequence;
}

interface LocalizationService extends Instance {
	GetTranslatorForPlayer(this: LocalizationService, player: Player): Translator;
	GetTranslatorForLocaleAsync(this: LocalizationService, locale: string): Translator;
	GetTranslatorForPlayerAsync(this: LocalizationService, player: Player): Translator;
}

interface LocalizationTable extends Instance {
	GetEntries(this: LocalizationTable): Array<LocalizationEntry>;
	GetTranslator(this: LocalizationTable, localeId: string): Translator;
	SetEntries(this: LocalizationTable, entries: Array<LocalizationEntry>): void;
}

interface LogService extends Instance {
	GetLogHistory(this: LogService): Array<LogInfo>;
}

interface MarketplaceService extends Instance {
	ProcessReceipt: (receiptInfo: ReceiptInfo) => Enum.ProductPurchaseDecision;
	GetProductInfo(
		this: MarketplaceService,
		assetId: number,
		infoType: CastsToEnum<Enum.InfoType.Asset>,
	): AssetProductInfo;
	GetProductInfo(
		this: MarketplaceService,
		assetId: number,
		infoType: CastsToEnum<Enum.InfoType.Product>,
	): DeveloperProductInfo;
	GetProductInfo(
		this: MarketplaceService,
		assetId: number,
		infoType: CastsToEnum<Enum.InfoType.GamePass>,
	): AssetProductInfo;
	PromptProductPurchase(
		this: MarketplaceService,
		player: Player,
		productId: number,
		equipIfPurchased?: boolean,
		currencyType?: CastsToEnum<Enum.CurrencyType>,
	): void;
	PromptPurchase(
		this: MarketplaceService,
		player: Player,
		assetId: number,
		equipIfPurchased?: boolean,
		currencyType?: CastsToEnum<Enum.CurrencyType>,
	): void;
	GetDeveloperProductsAsync(
		this: MarketplaceService,
	): StandardPages<{
		Description: string;
		PriceInRobux: number;
		ProductId: number;
		IconImageAssetId: number;
		Name: string;
	}>;
}

/** @rbxts server */
interface MessagingService extends Instance {
	SubscribeAsync(
		this: MessagingService,
		topic: string,
		callback: (Data: any, Sent: number) => void,
	): RBXScriptConnection;
}

interface Model extends PVInstance {
	PrimaryPart: BasePart | undefined;
	GetBoundingBox(this: Model): LuaTuple<[CFrame, Vector3]>;
}

interface NetworkClient extends NetworkPeer {
	readonly ConnectionAccepted: RBXScriptSignal<(peer: string, replicator: ClientReplicator) => void>;
}

interface NetworkReplicator extends Instance {
	GetPlayer(this: NetworkReplicator): Player;
}

interface ObjectValue extends ValueBase {
	readonly Changed: RBXScriptSignal<(value?: Instance) => void>;
}

/** @rbxts server */
interface OrderedDataStore extends GlobalDataStore {
	GetSortedAsync(
		this: OrderedDataStore,
		ascending: boolean,
		pagesize: number,
		minValue?: number,
		maxValue?: number,
	): DataStorePages;
}

interface Pages<T = unknown> extends Instance {
	GetCurrentPage(this: Pages): Array<T>;
}

interface Path extends Instance {
	GetWaypoints(this: Path): Array<PathWaypoint>;
}

interface PathfindingService extends Instance {
	CreatePath(this: PathfindingService, agentParameters?: AgentParameters): Path;
	FindPathAsync(this: PathfindingService, start: Vector3, finish: Vector3): Path;
}

interface PhysicsService extends Instance {
	GetCollisionGroups(this: PhysicsService): Array<CollisionGroupInfo>;
}

interface Player extends Instance {
	readonly Name: string;
	readonly UserId: number;
	ReplicationFocus: BasePart | undefined;
	readonly Chatted: RBXScriptSignal<(message: string, recipient?: Player) => void>;
	/** ### TS Usage
	 * One should check the LocationType of each member of this array in order to verify which members are present. Should be compared to the LocationType const enum.
	 */
	GetFriendsOnline(this: Player, maxFriends?: number): Array<FriendOnlineInfo>;
	/** @rbxts server */
	LoadCharacter(this: Player): void;
	/** @rbxts server */
	LoadCharacterWithHumanoidDescription(this: Player, humanoidDescription: HumanoidDescription): void;
	GetMouse(this: Player): PlayerMouse;
	GetJoinData(this: Player): PlayerJoinInfo;
}

interface PlayerGui extends BasePlayerGui {}

interface Players extends Instance {
	/** @rbxts client */
	readonly LocalPlayer: Player;
	GetPlayerByUserId(this: Players, userId: number): Player | undefined;
	GetPlayerFromCharacter(this: Players, character: Instance | undefined): Player | undefined;
	GetPlayers(this: Players): Array<Player>;

	GetCharacterAppearanceAsync(this: Players, userId: number): Model | undefined;
	GetCharacterAppearanceInfoAsync(this: Players, userId: number): CharacterAppearanceInfo;
	GetFriendsAsync(this: Players, userId: number): FriendPages;

	GetHumanoidDescriptionFromOutfitId(this: Players, outfitId: number): HumanoidDescription;
	GetHumanoidDescriptionFromUserId(this: Players, userId: number): HumanoidDescription;

	GetUserThumbnailAsync(
		this: Players,
		userId: number,
		thumbnailType: CastsToEnum<Enum.ThumbnailType>,
		thumbnailSize: CastsToEnum<Enum.ThumbnailSize>,
	): LuaTuple<[string, boolean]>;
}

interface Plugin extends Instance {
	GetMouse(this: Plugin): PluginMouse;
	CreateDockWidgetPluginGui(
		this: Plugin,
		pluginGuiId: string,
		dockWidgetPluginGuiInfo: DockWidgetPluginGuiInfo,
	): DockWidgetPluginGui;
	CreatePluginAction(
		this: Plugin,
		actionId: string,
		text: string,
		statusTip: string,
		iconName?: string,
		allowBinding?: boolean,
	): PluginAction;
	CreatePluginMenu(this: Plugin, id: string, title?: string, icon?: string): PluginMenu;
	CreateToolbar(this: Plugin, name: string): PluginToolbar;
	ImportFbxRig(this: Plugin, isR15?: boolean): Model;
	Union(this: Plugin, objects: Array<BasePart>): UnionOperation;
}

interface PluginManager extends Instance {
	CreatePlugin(this: PluginManager): Plugin;
}

interface PluginMenu extends Instance {
	AddAction(this: PluginMenu, action: PluginAction): void;
	AddMenu(this: PluginMenu, menu: PluginMenu): void;
	AddNewAction(this: PluginMenu, actionId: string, text: string, icon?: string): PluginAction;
}

interface PluginToolbar extends Instance {
	CreateButton(
		this: PluginToolbar,
		buttonId: string,
		tooltip: string,
		iconname: string,
		text?: string,
	): PluginToolbarButton;
}

interface PolicyService extends Instance {
	/** Returns policy information about a player which is based on geolocation, age group, and platform. */
	GetPolicyInfoForPlayerAsync(this: PolicyService, player: Player): PolicyInfo;
}

interface RemoteEvent extends Instance {
	readonly OnClientEvent: RBXScriptSignal<(...arguments: Array<unknown>) => void, true>;
	readonly OnServerEvent: RBXScriptSignal<(player: Player, ...arguments: Array<unknown>) => void>;
	FireAllClients(this: RemoteEvent, ...arguments: Array<unknown>): void;
	FireClient(this: RemoteEvent, player: Player, ...arguments: Array<unknown>): void;
	FireServer(this: RemoteEvent, ...arguments: Array<unknown>): void;
}

interface RemoteFunction extends Instance {
	OnClientInvoke: (...arguments: Array<any>) => void;
	OnServerInvoke: (player: Player, ...arguments: Array<unknown>) => void;
	InvokeClient(this: RemoteFunction, player: Player, ...arguments: Array<any>): unknown;
	InvokeServer<R>(this: RemoteFunction, ...arguments: Array<unknown>): R;
}

interface RunService extends Instance {
	BindToRenderStep(this: RunService, name: string, priority: number, callback: (deltaTime: number) => void): void;
}

interface ScriptDebugger extends Instance {
	GetGlobals(this: ScriptDebugger): Map<string, any>;
	GetLocals(this: ScriptDebugger, stackFrame?: number): Map<string, any>;
	GetUpvalues(this: ScriptDebugger, stackFrame?: number): Map<string, any>;
}

/** @rbxts server */
interface ServerScriptService extends Instance {}

/** @rbxts server */
interface ServerStorage extends Instance {}

interface ServiceProvider<S = unknown> extends Instance {
	readonly ServiceAdded: RBXScriptSignal<(service: S[keyof S]) => void>;
	readonly ServiceRemoving: RBXScriptSignal<(service: S[keyof S]) => void>;
	FindService(this: ServiceProvider<S>, className: string): S[keyof S] | undefined;
	FindService(this: ServiceProvider<S>, className: string): Instance | undefined;
	GetService<T extends keyof S>(this: ServiceProvider<S>, className: T): S[T];
}

interface SocialService extends Instance {
	readonly GameInvitePromptClosed: RBXScriptSignal<(senderPlayer: Player, recipientIds: Array<number>) => void>;
}

interface SoundService extends Instance {
	GetListener(
		this: SoundService,
	):
		| [Enum.ListenerType.Camera, undefined]
		| [Enum.ListenerType.CFrame, CFrame]
		| [Enum.ListenerType.ObjectCFrame, BasePart]
		| [Enum.ListenerType.ObjectPosition, BasePart];
	SetListener(this: SoundService, listenerType: CastsToEnum<Enum.ListenerType.Camera>): void;
	SetListener(this: SoundService, listenerType: CastsToEnum<Enum.ListenerType.CFrame>, cframe: CFrame): void;
	SetListener(
		this: SoundService,
		listenerType: CastsToEnum<Enum.ListenerType.ObjectCFrame>,
		basePart: BasePart,
	): void;
	SetListener(
		this: SoundService,
		listenerType: CastsToEnum<Enum.ListenerType.ObjectPosition>,
		basePart: BasePart,
	): void;
	PlayLocalSound(this: SoundService, sound: Sound): void;
}

interface StandardPages<T = unknown> extends Pages<T> {}

interface StarterGui extends BasePlayerGui {
	GetCore<T extends keyof GettableCores>(this: StarterGui, parameter: T): GettableCores[T];
	SetCore<T extends keyof SettableCores>(this: StarterGui, parameter: T, option: SettableCores[T]): void;
}

interface Studio extends Instance {
	Theme: StudioTheme;
}

interface SurfaceGui extends LayerCollector {
	Adornee: BasePart | undefined;
}

interface Team extends Instance {
	GetPlayers(this: Team): Array<Player>;
}

interface Teams extends Instance {
	GetTeams(this: Teams): Array<Team>;
}

interface TeleportService extends Instance {
	readonly LocalPlayerArrivedFromTeleport: RBXScriptSignal<(loadingGui: ScreenGui, dataTable?: unknown) => void>;

	readonly TeleportInitFailed: RBXScriptSignal<
		(player: Player, teleportResult: Enum.TeleportResult, errorMessage: string) => void
	>;
	/** @rbxts server */
	GetPlayerPlaceInstanceAsync(this: TeleportService, userId: number): LuaTuple<[boolean, string, number, string]>;
	/** @rbxts server */
	ReserveServer(this: TeleportService, placeId: number): LuaTuple<[string, string]>;
	/** @rbxts client */
	GetArrivingTeleportGui(this: TeleportService): ScreenGui | undefined;
	/** @rbxts client */
	GetLocalPlayerTeleportData(this: TeleportService): unknown;
	/** @rbxts client */
	GetTeleportSetting(this: TeleportService, setting: string): unknown;
	/** @rbxts client */
	SetTeleportGui(this: TeleportService, gui: ScreenGui): void;
	/** @rbxts client */
	SetTeleportSetting(this: TeleportService, setting: string, value: TeleportData): void;
	Teleport(
		this: TeleportService,
		placeId: number,
		player?: Player,
		teleportData?: TeleportData,
		customLoadingScreen?: ScreenGui,
	): void;

	TeleportToPrivateServer(
		this: TeleportService,
		placeId: number,
		reservedServerAccessCode: string,
		players: Array<Player>,
		spawnName?: string,
		teleportData?: TeleportData,
		customLoadingScreen?: ScreenGui,
	): void;

	TeleportPartyAsync(
		this: TeleportService,
		placeId: number,
		players: Array<Player>,
		teleportData?: TeleportData,
		customLoadingScreen?: ScreenGui,
	): string;

	TeleportToPlaceInstance(
		this: TeleportService,
		placeId: number,
		instanceId: string,
		player?: Player,
		spawnName?: string,
		teleportData?: TeleportData,
		customLoadingScreen?: ScreenGui,
	): void;

	TeleportToSpawnByName(
		this: TeleportService,
		placeId: number,
		spawnName: string,
		player?: Player,
		teleportData?: TeleportData,
		customLoadingScreen?: ScreenGui,
	): void;
}

interface Terrain extends BasePart {
	CopyRegion(this: Terrain, region: Region3int16): TerrainRegion;
	PasteRegion(this: Terrain, region: TerrainRegion, corner: Vector3int16, pasteEmptyCells: boolean): void;
	ReadVoxels(
		this: Terrain,
		region: Region3,
		resolution: number,
	): LuaTuple<[ReadVoxelsArray<Enum.Material>, ReadVoxelsArray<number>]>;
	WriteVoxels(
		this: Terrain,
		region: Region3,
		resolution: number,
		materials: Array<Array<Array<CastsToEnum<Enum.Material>>>>,
		occupancy: Array<Array<Array<number>>>,
	): void;
}

interface TextBox extends GuiObject {
	readonly FocusLost: RBXScriptSignal<(enterPressed: boolean, inputThatCausedFocusLoss: InputObject) => void>;
}

interface TextService extends Instance {
	/** @rbxts server */
	FilterStringAsync(
		this: TextService,
		stringToFilter: string,
		fromUserId: number,
		textContext?: CastsToEnum<Enum.TextFilterContext>,
	): TextFilterResult | undefined;
}

interface TweenService extends Instance {
	Create<T extends Instances[keyof Instances]>(
		this: TweenService,
		instance: T,
		tweenInfo: TweenInfo,
		propertyTable: Partial<FilterMembers<T, Tweenable>>,
	): Tween;
}

interface UIPageLayout extends UIGridStyleLayout {
	readonly PageEnter: RBXScriptSignal<(page: GuiObject) => void>;
	readonly PageLeave: RBXScriptSignal<(page: GuiObject) => void>;
	readonly Stopped: RBXScriptSignal<(page: GuiObject) => void>;
	JumpTo(this: UIPageLayout, page: GuiObject): void;
}

/** @rbxts client */
interface UserInputService extends Instance {
	readonly InputBegan: RBXScriptSignal<(input: InputObject, gameProcessedEvent: boolean) => void>;
	readonly InputChanged: RBXScriptSignal<(input: InputObject, gameProcessedEvent: boolean) => void>;
	readonly InputEnded: RBXScriptSignal<(input: InputObject, gameProcessedEvent: boolean) => void>;
	readonly TextBoxFocusReleased: RBXScriptSignal<(textboxReleased: TextBox) => void>;
	readonly TextBoxFocused: RBXScriptSignal<(textboxFocused: TextBox) => void>;
	readonly TouchEnded: RBXScriptSignal<(touch: InputObject, gameProcessedEvent: boolean) => void>;
	readonly TouchMoved: RBXScriptSignal<(touch: InputObject, gameProcessedEvent: boolean) => void>;
	readonly TouchPan: RBXScriptSignal<
		(
			touchPositions: Array<InputObject>,
			totalTranslation: Vector2,
			velocity: Vector2,
			state: Enum.UserInputState,
			gameProcessedEvent: boolean,
		) => void
	>;
	readonly TouchRotate: RBXScriptSignal<
		(
			touchPositions: Array<InputObject>,
			rotation: number,
			velocity: number,
			state: Enum.UserInputState,
			gameProcessedEvent: boolean,
		) => void
	>;
	readonly TouchPinch: RBXScriptSignal<
		(
			touchPositions: Array<InputObject>,
			scale: number,
			velocity: number,
			state: Enum.UserInputState,
			gameProcessedEvent: boolean,
		) => void
	>;
	readonly TouchLongPress: RBXScriptSignal<
		(touchPositions: Array<InputObject>, state: Enum.UserInputState, gameProcessedEvent: boolean) => void
	>;
	readonly TouchStarted: RBXScriptSignal<(touch: InputObject, gameProcessedEvent: boolean) => void>;
	readonly TouchTap: RBXScriptSignal<(touchPositions: Array<InputObject>, gameProcessedEvent: boolean) => void>;
	readonly DeviceAccelerationChanged: RBXScriptSignal<(acceleration: InputObject) => void>;
	readonly DeviceGravityChanged: RBXScriptSignal<(gravity: InputObject) => void>;
	readonly DeviceRotationChanged: RBXScriptSignal<(rotation: InputObject, cframe: CFrame) => void>;
	GetConnectedGamepads(this: UserInputService): Array<Enum.UserInputType>;
	GetDeviceRotation(this: UserInputService): LuaTuple<[InputObject, CFrame]>;
	GetGamepadState(this: UserInputService, gamepadNum: CastsToEnum<Enum.UserInputType>): Array<InputObject>;
	GetKeysPressed(this: UserInputService): Array<InputObject>;
	GetMouseButtonsPressed(this: UserInputService): Array<InputObject>;
	GetNavigationGamepads(this: UserInputService): Array<Enum.UserInputType>;
	GetSupportedGamepadKeyCodes(
		this: UserInputService,
		gamepadNum: CastsToEnum<Enum.UserInputType>,
	): Array<Enum.KeyCode>;
	GetDeviceAcceleration(this: UserInputService): InputObject;
	GetDeviceGravity(this: UserInputService): InputObject;
	GetFocusedTextBox(this: UserInputService): TextBox | undefined;
}

interface UserSettings extends GenericSettings<{ UserGameSettings: UserGameSettings }> {}

/**
 * Used to hold a value.
 */
interface ValueBase extends Instance {
	/** The value this object holds. */
	Value: unknown;
	/**
	 * This event fires whenever the `Value` property is changed.
	 *
	 * This event can be used to track when a ValueBase `Value` changes and to track the different values that it may change to.
	 */
	readonly Changed: RBXScriptSignal<(value?: unknown) => void>;
}

interface Workspace extends WorldRoot {
	/** Do not use `Workspace.BreakJoints`. Use a for-loop instead */
	BreakJoints: any;
	/** Do not use `Workspace.MakeJoints`. Use a for-loop instead */
	MakeJoints: any;
	Terrain: Terrain;
}

interface WorldRoot extends Model {
	FindPartOnRay(
		this: WorldRoot,
		ray: Ray,
		ignoreDescendantsInstance?: Instance,
		terrainCellsAreCubes?: boolean,
		ignoreWater?: boolean,
	): LuaTuple<[BasePart | undefined, Vector3, Vector3, Enum.Material]>;

	FindPartOnRayWithIgnoreList(
		this: WorldRoot,
		ray: Ray,
		ignoreDescendantsTable: Array<Instance>,
		terrainCellsAreCubes?: boolean,
		ignoreWater?: boolean,
	): LuaTuple<[BasePart | undefined, Vector3, Vector3, Enum.Material]>;

	FindPartOnRayWithWhitelist(
		this: WorldRoot,
		ray: Ray,
		whitelistDescendantsTable: Array<Instance>,
		ignoreWater?: boolean,
	): LuaTuple<[BasePart | undefined, Vector3, Vector3, Enum.Material]>;

	FindPartsInRegion3(
		this: WorldRoot,
		region: Region3,
		ignoreDescendantsInstance?: Instance,
		maxParts?: number,
	): Array<BasePart>;

	FindPartsInRegion3WithIgnoreList(
		this: WorldRoot,
		region: Region3,
		ignoreDescendantsTable: Array<Instance>,
		maxParts?: number,
	): Array<BasePart>;

	FindPartsInRegion3WithWhiteList(
		this: WorldRoot,
		region: Region3,
		whitelistDescendantsTable: Array<Instance>,
		maxParts?: number,
	): Array<BasePart>;
}
