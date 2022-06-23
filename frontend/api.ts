/**
 * powered by wyyt-fe
 * SpringCloud微服务接口说明文档
 * @description:  SpringCloud微服务接口说明文档
 * @version:  2.5.2
 */

import { request as XHR } from "./request";

/** DataPermissionDefineResponse */
export interface DetailUsingPOSTResult {
  dataModule: string;

  dataModuleName: string;

  databaseTable: string;

  groupName: string;

  ownerDepartmentIdColumn: string;

  ownerUserIdColumn: string;

  shareUserIdColumn: string;
}
/** DataPermissionDefineQueryRequest */
export interface DataPermissionDefineQueryRequest {
  dataModule: string;
}
/** @description 返回给调用方的具体数据 */
export type ListUsingPOST_1Result = {
  dataModule: string;

  dataModuleName: string;

  databaseTable: string;

  groupName: string;

  ownerDepartmentIdColumn: string;

  ownerUserIdColumn: string;

  shareUserIdColumn: string;
}[];
/** @description 返回给调用方的具体数据 */
export type ListUsingPOSTResult = {
  /** @description 数据模块 */
  dataModule: string;
  /** @description 数据模块名称 */
  dataModuleName: string;
}[];
/** DataPermissionDefineReq */
export interface DataPermissionDefineReq {
  /** @description 数据模块名称模糊搜索 */
  dataModuleNameLike: string;
}
/** @description 返回给调用方的具体数据 */
export type ListUsingPOST_2Result = {
  applyEmployeeType: string;

  dataModule: string;

  permissionRange: string;
}[];
/** DefaultDataPermissionQueryRequest */
export interface DefaultDataPermissionQueryRequest {
  applyEmployeeType: string;

  dataModule: string;
}
/** IdRsp */
export interface AddDepartmentUsingPOSTResult {
  /**
   * Format: int64
   * @description 主键id
   */
  id: number;
}
/** DepartmentAddReq */
export interface DepartmentAddReq {
  /** @description 部门职能 */
  departmentFunctions: string;
  /**
   * Format: int64
   * @description 部门负责人id
   */
  departmentHeadId: number;
  /** @description 部门名称 */
  departmentName: string;
  /**
   * Format: int64
   * @description 钉钉部门id
   */
  dingTalkDepartmentId: number;
  /**
   * Format: int64
   * @description 钉钉父部门id
   */
  dingTalkParentId: number;
  /**
   * Format: int64
   * @description 上级部门
   */
  parentId: number;
  /**
   * Format: int32
   * @description 部门排序
   */
  sortNumber: number;
}
/** DeptUserBatchAddReq */
export interface DeptUserBatchAddReq {
  /**
   * Format: int64
   * @description 部门id
   */
  departmentId: number;
  /** @description 用户id列表 */
  userIdList: number[];
}
/** DeptUserBatchAdjustReq */
export interface DeptUserBatchAdjustReq {
  /**
   * Format: int64
   * @description 更改的部门id
   */
  changeDeptId: number;
  /**
   * Format: int64
   * @description 当前选中的部门id
   */
  oldDeptId: number;
  /** @description 用户id列表 */
  userIdList: number[];
}
/** IdReq */
export interface IdReq {
  /**
   * Format: int64
   * @description id主键
   */
  id: number;
}
/** DeptUserBatchDeleteReq */
export interface DeptUserBatchDeleteReq {
  /**
   * Format: int64
   * @description 部门id
   */
  departmentId: number;
  /** @description 用户id列表 */
  userIdList: number[];
}
/** DepartmentDetailRsp */
export interface DetailDepartmentUsingPOSTResult {
  /** @description 部门职能 */
  departmentFunctions: string;
  /**
   * Format: int64
   * @description 部门负责人id
   */
  departmentHeadId: number;
  /** @description 部门负责人名称 */
  departmentHeadName: string;
  /** @description 部门名称 */
  departmentName: string;
  /**
   * Format: int64
   * @description 部门id
   */
  id: number;
  /**
   * Format: int64
   * @description 上级部门id
   */
  parentId: number;
  /** @description 上级部门名称 */
  parentName: string;
  /**
   * Format: int32
   * @description 部门排序
   */
  sortNumber: number;
}
/** DepartmentResponse */
export interface DetailUsingPOST_1Result {
  /** @description 部门职能 */
  departmentFunctions: string;
  /**
   * Format: int64
   * @description 部门负责人id
   */
  departmentHeadId: number;
  /** @description 部门负责人姓名 */
  departmentHeadName: string;
  /** @description 部门名称 */
  departmentName: string;
  /**
   * Format: int32
   * @description 部门层级
   */
  hierarchy: number;
  /**
   * Format: int64
   * @description 部门id
   */
  id: number;
  /**
   * Format: int64
   * @description 父部门ID
   */
  parentId: number;
  /** @description 父部门ID逗号分割 */
  parentIds: string;
  /**
   * Format: int32
   * @description 排序序号（越小越靠前）
   */
  sortNumber: number;
}
/** DepartmentDetailRequest */
export interface DepartmentDetailRequest {
  /**
   * Format: int64
   * @description 部门id
   */
  id: number;
  /**
   * Format: int64
   * @description 租户id
   */
  tenantId: number;
}
/** @description 返回给调用方的具体数据 */
export type ListUsingPOST_3Result = {
  /** @description 部门职能 */
  departmentFunctions: string;
  /**
   * Format: int64
   * @description 部门负责人id
   */
  departmentHeadId: number;
  /** @description 部门负责人姓名 */
  departmentHeadName: string;
  /** @description 部门名称 */
  departmentName: string;
  /**
   * Format: int32
   * @description 部门层级
   */
  hierarchy: number;
  /**
   * Format: int64
   * @description 部门id
   */
  id: number;
  /**
   * Format: int64
   * @description 父部门ID
   */
  parentId: number;
  /** @description 父部门ID逗号分割 */
  parentIds: string;
  /**
   * Format: int32
   * @description 排序序号（越小越靠前）
   */
  sortNumber: number;
}[];
/** DepartmentQueryRequest */
export interface DepartmentQueryRequest {
  /** Format: int64 */
  departmentId: number;

  departmentName: string;

  departmentParentIdsLike: string;

  departmentParentIdsLikeList: string[];

  leader: boolean;

  notInDepartmentIdList: number[];
  /** Format: int64 */
  parentId: number;
  /**
   * Format: int64
   * @description 租户id
   */
  tenantId: number;

  userAccount: string;
  /** Format: int64 */
  userId: number;

  userIdList: number[];
}
/** DeptIdAndUserIdListResponse */
export interface QueryBelongDepartmentAndChildUsingPOSTResult {
  /** @description 用户id集合 */
  deptIdList: number[];
  /** @description 用户id集合 */
  userIdList: number[];
}
/** UserQueryRequest */
export interface UserQueryRequest {
  /** Format: int64 */
  departmentId: number;

  departmentIdList: number[];

  mobile: string;
  /** Format: int64 */
  roleId: number;
  /**
   * Format: int64
   * @description 租户id
   */
  tenantId: number;

  userAccount: string;
  /** Format: int64 */
  userId: number;

  userIdList: number[];

  userName: string;

  userNameLike: string;
}
/** @description 返回给调用方的具体数据 */
export type SearchDepartmentUsingPOSTResult = {
  /** @description 部门名称 */
  departmentName: string;
  /**
   * Format: int64
   * @description 部门id
   */
  id: number;
}[];
/** DepartmentNameSearchReq */
export interface DepartmentNameSearchReq {
  /** @description 部门名称模糊查询 */
  departmentNameLike: string;
}
/** @description 返回给调用方的具体数据 */
export type TreeDepartmentUsingPOSTResult = {
  /** @description 子部门 */
  children: {}[];
  /** @description 部门名称 */
  departmentName: string;
  /**
   * Format: int32
   * @description 部门层级
   */
  hierarchy: number;
  /**
   * Format: int64
   * @description 部门ID
   */
  id: number;
  /**
   * Format: int64
   * @description 父部门ID
   */
  parentId: number;
}[];
/** @description 返回给调用方的具体数据 */
export type TreeUserUsingPOSTResult = {
  /** @description 子部门 */
  childList: {}[];

  department: boolean;
  /** @description 节点id */
  id: string;
  /** @description 节点名称 */
  name: string;
  /** @description 父节点ID */
  pid: string;
  /** @description 树结构唯一id */
  treeId: string;
  /** @description 用户账号 */
  userAccount: string;
}[];
/** DepartmentReq */
export interface DepartmentReq {
  /**
   * Format: int64
   * @description 部门id
   */
  departmentId: number;
}
/** DepartmentUpdateReq */
export interface DepartmentUpdateReq {
  /** @description 部门职能 */
  departmentFunctions: string;
  /**
   * Format: int64
   * @description 部门负责人id
   */
  departmentHeadId: number;
  /** @description 部门名称 */
  departmentName: string;
  /**
   * Format: int64
   * @description 钉钉部门id
   */
  dingTalkDepartmentId: number;
  /**
   * Format: int64
   * @description 钉钉父部门id
   */
  dingTalkParentId: number;
  /**
   * Format: int64
   * @description 部门id
   */
  id: number;
  /**
   * Format: int64
   * @description 上级部门
   */
  parentId: number;
  /**
   * Format: int32
   * @description 部门排序
   */
  sortNumber: number;
}
/** DictAddReq */
export interface DictAddReq {
  /** @description 字典代码 */
  dictCode: string;
  /** @description 字典描述 */
  dictDesc: string;
  /** @description 选项列表 */
  dictDetailList: {
    /** @description 选项文本 */
    optionName: string;
    /** @description 选项值 */
    optionValue: string;
  }[];
  /** @description 字典名称 */
  dictName: string;
  /**
   * Format: int64
   * @description 字典所属模块ID
   */
  moduleId: number;
}
/** DictDetailRsp */
export interface DetailUsingPOST_2Result {
  /** @description 字典代码 */
  dictCode: string;
  /** @description 字典描述 */
  dictDesc: string;
  /** @description 选项列表 */
  dictDetailList: {
    /** @description 选项文本 */
    optionName: string;
    /** @description 选项值 */
    optionValue: string;
  }[];
  /** @description 字典名称 */
  dictName: string;
  /** @description 字典ID */
  id: string;
  /** @description 字典所属模块编码 */
  moduleCode: string;
  /**
   * Format: int64
   * @description 字典所属模块
   */
  moduleId: number;
  /** @description 字典所属模块名称 */
  moduleName: string;
}
/** @description 返回给调用方的具体数据 */
export interface DetailUsingPOST_3Result {}
/** DictDetailReq */
export interface DictDetailReq {
  /** @description 字典编码（字典ID与字典编码二选一必填） */
  dictCode: string;
  /**
   * Format: int64
   * @description 字典ID（字典ID与字典编码二选一必填）
   */
  dictId: number;
}
/** DictRsp */
export interface DictOptionDetailUsingPOSTResult {
  /** @description 字典文本 */
  label: string;
  /** @description 字典值 */
  value: string;
}
/** DictOptionDetailReq */
export interface DictOptionDetailReq {
  /** @description 字典编码（字典ID与字典编码二选一必填） */
  dictCode: string;
  /**
   * Format: int64
   * @description 字典ID（字典ID与字典编码二选一必填）
   */
  dictId: number;
  /** @description 字典明细编码 */
  dictOptionCode: string;
}
/** DictListReq */
export interface DictListReq {
  /** @description 字典所属模块编码 */
  moduleCode: string;
  /**
   * Format: int64
   * @description 字典所属模块ID
   */
  moduleId: number;
}
/** @description 返回给调用方的具体数据 */
export type ListUsingPOST_4Result = {
  /** @description 字典代码 */
  dictCode: string;
  /** @description 字典描述 */
  dictDesc: string;
  /** @description 字典名称 */
  dictName: string;
  /**
   * Format: int64
   * @description 主键id
   */
  id: number;
  /** @description 字典所属模块编码 */
  moduleCode: string;
  /**
   * Format: int64
   * @description 字典所属模块
   */
  moduleId: number;
  /** @description 字典所属模块名称 */
  moduleName: string;
  /** @description 选项值（英文逗号分割） */
  options: string;
  /** @description 更新时间 */
  rowUpdateTime: string;
}[];
/** DictQueryReq */
export interface DictQueryReq {
  /** @description 字典名称 */
  dictNameLike: string;
  /**
   * Format: int64
   * @description 字典所属模块
   */
  moduleId: number;
  /**
   * Format: int32
   * @description 页码，默认为1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示数量，默认为10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
}
/** PageResponse«DictQueryRsp» */
export interface PageUsingPOSTResult {
  /** @description 数据 */
  list: {
    /** @description 字典代码 */
    dictCode: string;
    /** @description 字典描述 */
    dictDesc: string;
    /** @description 字典名称 */
    dictName: string;
    /**
     * Format: int64
     * @description 主键id
     */
    id: number;
    /** @description 字典所属模块编码 */
    moduleCode: string;
    /**
     * Format: int64
     * @description 字典所属模块
     */
    moduleId: number;
    /** @description 字典所属模块名称 */
    moduleName: string;
    /** @description 选项值（英文逗号分割） */
    options: string;
    /** @description 更新时间 */
    rowUpdateTime: string;
  }[];
  /**
   * Format: int64
   * @description 总数
   */
  total: number;
}
/** DictUpdateReq */
export interface DictUpdateReq {
  /** @description 字典代码 */
  dictCode: string;
  /** @description 字典描述 */
  dictDesc: string;
  /** @description 选项列表 */
  dictDetailList: {
    /** @description 选项文本 */
    optionName: string;
    /** @description 选项值 */
    optionValue: string;
  }[];
  /** @description 字典名称 */
  dictName: string;
  /**
   * Format: int64
   * @description 字典id
   */
  id: number;
  /**
   * Format: int64
   * @description 字典所属模块ID
   */
  moduleId: number;
}
/** EmptyDingTalkReq */
export interface EmptyDingTalkReq {
  /**
   * Format: int64
   * @description 钉钉集成表id
   */
  id: number;
}
/** TenantIdRequest */
export interface TenantIdRequest {
  /**
   * Format: int64
   * @description 租户id
   */
  tenantId: number;
}
/** DingTalkSendWorkMsgRequest */
export interface DingTalkSendWorkMsgRequest {
  /** @description 消息内容 */
  content: string;
  /**
   * Format: int64
   * @description 租户id
   */
  tenantId: number;
  /** @description 用户ids */
  userIds: number[];
}
/** JobSyncDingTalkDataReq */
export interface JobSyncDingTalkDataReq {
  /**
   * Format: int64
   * @description 钉钉集成表id
   */
  id: number;
  /** @description 同步组织标识 yes_no_enum 0.不需要job同步，1.需要job同步 */
  needSyncOrganization: boolean;
}
/** DingTalkIntegrateRsp */
export interface QueryDingTalkIntegrateUsingPOSTResult {
  /** @description 钉钉微应用Agentid */
  agentId: string;
  /** @description 钉钉微应用AppKey */
  appKey: string;
  /** @description 钉钉微应用AppSecret */
  appSecret: string;
  /**
   * Format: int64
   * @description 钉钉集成表id
   */
  id: number;
  /** @description 定时同步组织标识 yes_no_enum 0.不需要job同步，1.需要job同步 */
  needSyncOrganization: boolean;
}
/** SaveDingTalkReq */
export interface SaveDingTalkReq {
  /** @description 钉钉微应用Agentid */
  agentId: string;
  /** @description 钉钉微应用AppKey */
  appKey: string;
  /** @description 钉钉微应用AppSecret */
  appSecret: string;
  /**
   * Format: int64
   * @description 钉钉集成表id
   */
  id: number;
}
/** SyncDingTalkDataReq */
export interface SyncDingTalkDataReq {
  /**
   * Format: int64
   * @description 钉钉集成表id
   */
  id: number;
  /** @description 同步组织标识 yes_no_enum 0.不需要job同步，1.需要job同步 */
  needSyncOrganization: boolean;
}
/** DownLoadRecordIdReq */
export interface DownLoadRecordIdReq {
  /**
   * Format: int64
   * @description 下载记录Id
   */
  downLoadRecordId: number;
}
/** @description 返回给调用方的具体数据 */
export type QueryDownLoadRecordUsingPOSTResult = {
  /** @description 下载记录日期 */
  downLoadRecordDate: string;
  /** @description 下载记录列表 */
  downLoadRecords: {
    /** @description 是否可以下载（控制按钮展示） */
    canDownload: boolean;
    /**
     * Format: int64
     * @description 下载记录Id
     */
    downLoadRecordId: number;
    /** @description 下载日期 */
    downloadDate: string;
    /** @description 下载时间 */
    downloadTime: string;
    /** @description 文件扩展名 */
    fileExtension: string;
    /** @description 文件名称 */
    fileName: string;
    /** @description 文件地址 */
    fileUrl: string;
    /** @description 记录状态,字典：download_center_record_status */
    recordStatus: string;
    /** @description 记录状态文本 */
    recordStatusText: string;
  }[];
}[];
/** DownLoadRecordQueryReq */
export interface DownLoadRecordQueryReq {
  /** @description 下载时间范围-开始 */
  downloadTimeBegin: string;
  /** @description 下载时间范围-结束 */
  downloadTimeEnd: string;
}
/** DownLoadRecordSyncRsp */
export interface SyncRecordUsingPOSTResult {
  /** @description 下载记录编码，如果该值传了的话则是更新已有记录状态 */
  downloadRecordCode: string;
}
/** DownLoadRecordSyncReq */
export interface DownLoadRecordSyncReq {
  /** @description 下载记录编码，如果该值传了的话则是更新已有记录状态 */
  downloadRecordCode: string;
  /** @description 下载时间 */
  downloadTime: string;
  /** @description 过期时间 */
  expireTime: string;
  /** @description 文件名称 */
  fileName: string;
  /** @description 文件地址 */
  fileUrl: string;
  /** @description 记录状态,字典：download_center_record_status，processing：处理中，finished：已完成，expired：已过期 */
  recordStatus: string;
  /**
   * Format: int64
   * @description 租户id
   */
  tenantId: number;
  /**
   * Format: int64
   * @description 用户id
   */
  userId: number;
}
/** MenuAddReq */
export interface MenuAddReq {
  /** @description 是否默认菜单（0-否，1-是） */
  defaultMenu: string;
  /** @description 链接URL（外部页面地址） */
  extendUrl: string;
  /** @description 外部页面参数 */
  extendUrlParamList: {
    /** @description 加密方式 */
    encrypt: string;
    /** @description 参数名称 */
    key: string;
    /** @description 参数类型 */
    type: string;
    /** @description 参数值 */
    value: string;
    /** @description 前端可使用参数值 */
    valueActual: string;
  }[];
  /** @description 接口权限 */
  interPermission: string;
  /** @description 图标 */
  menuIcon: string;
  /** @description 菜单名称 */
  menuName: string;
  /** @description 菜单权限 */
  menuPermission: string;
  /** @description 菜单性质（inlayMenu-内置菜单、extendMenu-外部页面、appMenu-APP菜单，字典：menu_property_enum） */
  menuProperty: string;
  /** @description 菜单类型(menu菜单/button按钮，字典：menu_type_enum) */
  menuType: string;
  /** @description 菜单链接 */
  menuUrl: string;
  /**
   * Format: int64
   * @description 模块ID
   */
  moduleId: number;
  /** @description 是否当前页面打开（0-否，1-是） */
  outerOpen: string;
  /**
   * Format: int64
   * @description 上级菜单ID
   */
  parentId: number;
  /**
   * Format: int32
   * @description 排序序号（越小越靠前）
   */
  sortNumber: number;
}
/** @description 返回给调用方的具体数据 */
export type AllMenuTreeUsingPOSTResult = {
  /** @description 是否选中 */
  checked: boolean;
  /** @description 子菜单 */
  children: {}[];
  /** @description 是否默认菜单：0否1是 */
  defaultMenu: string;
  /**
   * Format: int32
   * @description 状态（是否禁用: 0否，1是；字典：enabled_disabled_enum）
   */
  disabled: number;
  /** @description 链接URL（外部页面地址） */
  extendUrl: string;
  /** @description 外部页面参数 */
  extendUrlParamList: {
    /** @description 加密方式 */
    encrypt: string;
    /** @description 参数名称 */
    key: string;
    /** @description 参数类型 */
    type: string;
    /** @description 参数值 */
    value: string;
    /** @description 前端可使用参数值 */
    valueActual: string;
  }[];
  /** @description 接口权限 */
  interPermission: string;
  /** @description 菜单图标 */
  menuIcon: string;
  /**
   * Format: int64
   * @description 菜单ID
   */
  menuId: number;
  /** @description 菜单名称 */
  menuName: string;
  /** @description 菜单权限 */
  menuPermission: string;
  /** @description 菜单性质（inlayMenu-内置菜单、extendMenu-外部页面，字典：menu_property_enum） */
  menuProperty: string;
  /** @description 菜单类型(menu菜单button按钮，字典：menu_type_enum) */
  menuType: string;
  /** @description 菜单链接 */
  menuUrl: string;
  /** @description 模块代码 */
  moduleCode: string;
  /**
   * Format: int64
   * @description 模块ID
   */
  moduleId: number;
  /** @description 是否当前页面打开（0-否，1-是） */
  outerOpen: string;
  /**
   * Format: int64
   * @description 父菜单ID
   */
  parentId: number;
  /** @description 父菜单名称 */
  parentName: string;
  /**
   * Format: int32
   * @description 排序序号（越小越靠前）
   */
  sortNumber: number;
}[];
/** MenuQueryReq */
export interface MenuQueryReq {
  /** @description 菜单查询性质；1-所有菜单；2-不包括按钮、外部页面 */
  menuQueryType: string;
  /**
   * Format: int64
   * @description 模块ID
   */
  moduleId: number;
}
/** MenuIdReq */
export interface MenuIdReq {
  /**
   * Format: int64
   * @description 菜单ID
   */
  menuId: number;
}
/** MenuTreeRsp */
export interface MenuDetailUsingPOSTResult {
  /** @description 是否选中 */
  checked: boolean;
  /** @description 子菜单 */
  children: {}[];
  /** @description 是否默认菜单：0否1是 */
  defaultMenu: string;
  /**
   * Format: int32
   * @description 状态（是否禁用: 0否，1是；字典：enabled_disabled_enum）
   */
  disabled: number;
  /** @description 链接URL（外部页面地址） */
  extendUrl: string;
  /** @description 外部页面参数 */
  extendUrlParamList: {
    /** @description 加密方式 */
    encrypt: string;
    /** @description 参数名称 */
    key: string;
    /** @description 参数类型 */
    type: string;
    /** @description 参数值 */
    value: string;
    /** @description 前端可使用参数值 */
    valueActual: string;
  }[];
  /** @description 接口权限 */
  interPermission: string;
  /** @description 菜单图标 */
  menuIcon: string;
  /**
   * Format: int64
   * @description 菜单ID
   */
  menuId: number;
  /** @description 菜单名称 */
  menuName: string;
  /** @description 菜单权限 */
  menuPermission: string;
  /** @description 菜单性质（inlayMenu-内置菜单、extendMenu-外部页面，字典：menu_property_enum） */
  menuProperty: string;
  /** @description 菜单类型(menu菜单button按钮，字典：menu_type_enum) */
  menuType: string;
  /** @description 菜单链接 */
  menuUrl: string;
  /** @description 模块代码 */
  moduleCode: string;
  /**
   * Format: int64
   * @description 模块ID
   */
  moduleId: number;
  /** @description 是否当前页面打开（0-否，1-是） */
  outerOpen: string;
  /**
   * Format: int64
   * @description 父菜单ID
   */
  parentId: number;
  /** @description 父菜单名称 */
  parentName: string;
  /**
   * Format: int32
   * @description 排序序号（越小越靠前）
   */
  sortNumber: number;
}
/** MenuStatusUpdateReq */
export interface MenuStatusUpdateReq {
  /**
   * Format: int32
   * @description 是否禁用: 0否，1是；字段：enabled_disabled_enum
   */
  disabled: number;
  /**
   * Format: int64
   * @description 菜单ID
   */
  menuId: number;
}
/** TenantMenuQueryReq */
export interface TenantMenuQueryReq {
  /**
   * Format: int64
   * @description 模块ID
   */
  moduleId: number;
  /**
   * Format: int64
   * @description 租户id
   */
  tenantId: number;
}
/** RoleIdReq */
export interface RoleIdReq {
  /**
   * Format: int64
   * @description 角色ID
   */
  roleId: number;
}
/** MenuUpdateReq */
export interface MenuUpdateReq {
  /** @description 是否默认菜单（0-否，1-是） */
  defaultMenu: string;
  /** @description 链接URL（外部页面地址） */
  extendUrl: string;
  /** @description 外部页面参数 */
  extendUrlParamList: {
    /** @description 加密方式 */
    encrypt: string;
    /** @description 参数名称 */
    key: string;
    /** @description 参数类型 */
    type: string;
    /** @description 参数值 */
    value: string;
    /** @description 前端可使用参数值 */
    valueActual: string;
  }[];
  /** @description 接口权限 */
  interPermission: string;
  /** @description 图标 */
  menuIcon: string;
  /**
   * Format: int64
   * @description 菜单ID
   */
  menuId: number;
  /** @description 菜单名称 */
  menuName: string;
  /** @description 菜单权限 */
  menuPermission: string;
  /** @description 菜单性质（inlayMenu-内置菜单、extendMenu-外部页面、appMenu-APP菜单，字典：menu_property_enum） */
  menuProperty: string;
  /** @description 菜单类型(menu菜单/button按钮，字典：menu_type_enum) */
  menuType: string;
  /** @description 菜单链接 */
  menuUrl: string;
  /**
   * Format: int64
   * @description 模块ID
   */
  moduleId: number;
  /** @description 是否当前页面打开（0-否，1-是） */
  outerOpen: string;
  /**
   * Format: int64
   * @description 上级菜单ID
   */
  parentId: number;
  /**
   * Format: int32
   * @description 排序序号（越小越靠前）
   */
  sortNumber: number;
}
/** LoginMenuQueryReq */
export interface LoginMenuQueryReq {
  /** @description 菜单性质,字典：menu_property_enum:app端传：appMenu(APP菜单)；默认全部,不传值 */
  menuProperty: string;
}
/** SendMessageNoticeRequest */
export interface SendMessageNoticeRequest {
  /** @description app内部菜单url */
  appMenuUrl: string;
  /** @description 消息业务类型 */
  businessType: string;
  /** @description 点击类型 */
  clickType: string;
  /**
   * Format: int64
   * @description 用户id
   */
  createUserId: number;
  /** @description 用户名称 */
  createUserName: string;
  /** @description 外部链接url */
  externalLinkUrl: string;
  /** @description 内部菜单跳转参数 */
  menuUrlParam: string;
  /** @description 消息内容 */
  messageContent: {
    /** @description 文本是否加粗 */
    bold: boolean;
    /** @description 文本颜色 */
    color: string;
    /** @description 文本内容 */
    content: string;
    /** @description 文本字体大小 */
    fontSize: string;
    /** @description 连接 */
    src: string;
    /** @description 按钮类型 */
    type: string;
  }[];
  /** @description 消息通知接收信息id */
  receiveUserIds: number[];
  /**
   * Format: int64
   * @description 租户id
   */
  tenantId: number;
  /** @description 触发动作 */
  triggerAction: string;
  /** @description 触发动作描述 */
  triggerActionDesc: string;
  /** @description 触发模块 */
  triggerModule: string;
  /** @description 触发模块描述 */
  triggerModuleDesc: string;
  /** @description web内部菜单url */
  webMenuUrl: string;
}
/** SendMessageNoticeTextRequest */
export interface SendMessageNoticeTextRequest {
  /** @description app内部菜单url */
  appMenuUrl: string;
  /** @description 消息业务类型 */
  businessType: string;
  /** @description 点击类型 */
  clickType: string;
  /**
   * Format: int64
   * @description 用户id
   */
  createUserId: number;
  /** @description 用户名称 */
  createUserName: string;
  /** @description 外部链接url */
  externalLinkUrl: string;
  /** @description 内部菜单跳转参数 */
  menuUrlParam: string;
  /** @description 消息内容 */
  messageContent: string;
  /** @description 消息通知接收信息id */
  receiveUserIds: number[];
  /**
   * Format: int64
   * @description 租户id
   */
  tenantId: number;
  /** @description 触发动作 */
  triggerAction: string;
  /** @description 触发动作描述 */
  triggerActionDesc: string;
  /** @description 触发模块 */
  triggerModule: string;
  /** @description 触发模块描述 */
  triggerModuleDesc: string;
  /** @description web内部菜单url */
  webMenuUrl: string;
}
/** @description 返回给调用方的具体数据 */
export interface MessageNoticeAllSetReadUsingPOSTResult {}
/** MessageNoticeSetAllReadReq */
export interface MessageNoticeSetAllReadReq {}
/** PageResponse«MessageNoticePageRsp» */
export interface MessageNoticePageUsingPOSTResult {
  list: {
    /** @description app内部菜单url */
    appMenuUrl: string;
    /** @description 消息业务类型 */
    businessType: string;
    /** @description 消息业务类型图标 */
    businessTypeIcon: string;
    /** @description 消息业务类型文本 */
    businessTypeText: string;
    /** @description 点击类型:字典:click_type_enum */
    clickType: string;
    /** @description 外部链接url */
    externalLinkUrl: string;
    /**
     * Format: int32
     * @description 是否已读:字典is_read_enum
     */
    isRead: number;
    /** @description 内部菜单跳转参数 */
    menuUrlParam: string;
    /** @description 消息内容 */
    messageContent: string;
    /** @description 消息通知接收信息id */
    messageNoticeReceiverId: string;
    /**
     * Format: date-time
     * @description 已读时间
     */
    readTime: string;
    /**
     * Format: date-time
     * @description 送达时间
     */
    sendTime: string;
    /** @description web内部菜单url */
    webMenuUrl: string;
  }[];
  /** Format: int64 */
  total: number;
}
/** MessageNoticePageReq */
export interface MessageNoticePageReq {
  /** @description 消息业务类型 */
  businessType: string;
  /**
   * Format: int32
   * @description 是否已读：0.未读，1.已读 参考字典:is_read_enum
   */
  isRead: number;
  /**
   * Format: int32
   * @description 页码，默认为1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示数量，默认为10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
}
/** MessageNoticeSetReadReq */
export interface MessageNoticeSetReadReq {
  /**
   * Format: int64
   * @description 消息通知接收信息id
   */
  messageNoticeReceiverId: number;
}
/** MessageNoticeStatisticalRsp */
export interface MessageNoticeStatisticalUsingPOSTResult {
  /** @description 消息业务类型 */
  businessTypes: {
    /** @description 消息业务类型 */
    businessType: string;
    /** @description 消息业务类型图标 */
    businessTypeIcon: string;
    /** @description 消息业务类型文本 */
    businessTypeText: string;
    /**
     * Format: int32
     * @description 读取条数
     */
    isReadTotal: number;
    /**
     * Format: int32
     * @description 没有读取条数
     */
    notReadTotal: number;
  }[];
  /**
   * Format: int32
   * @description 已经读取条数
   */
  isReadTotal: number;
  /**
   * Format: int32
   * @description 消息中心总条数
   */
  messageTotal: number;
  /**
   * Format: int32
   * @description 没有读取条数
   */
  notReadTotal: number;
}
/** MessageNoticeStatisticalReq */
export interface MessageNoticeStatisticalReq {}
/** MessageNoticeSendReq */
export interface MessageNoticeSendReq {
  /** MessageNoticeContentReq */
  content: {
    /** @description 消息业务类型 */
    businessType: string;
    /** @description 消息业务类型文本 */
    businessTypeText: string;
    /** @description 点击类型:not_click-不可点击、internal_menu-跳转内部菜单、external_link-打开外部链接 */
    clickType: string;
    /** @description 点击类型文本 */
    clickTypeText: string;
    /** @description 消息创建时间，格式：yyyy-MM-dd HH:mm:ss */
    createTime: string;
    /** @description 外部链接url */
    externalLinkUrl: string;
    /** @description 消息内容 */
    messageContent: string;
    /**
     * Format: int64
     * @description 消息通知接收id
     */
    messageId: number;
    /** @description web内部菜单url */
    webMenuUrl: string;
  };
  /** @description 消息接收人id集合 */
  receiveUserIds: number[];
}
/** ModuleAddReq */
export interface ModuleAddReq {
  /** @description 模块描述 */
  description: string;
  /** @description 模块代码 */
  moduleCode: string;
  /** @description 模块名称 */
  moduleName: string;
  /**
   * Format: int32
   * @description 排序
   */
  sortNumber: number;
}
/** ModuleBase */
export interface ModuleBase {
  /**
   * Format: int64
   * @description 模块ID
   */
  moduleId: number;
}
/** ModuleRsp */
export interface DetailUsingPOST_4Result {
  /**
   * Format: int64
   * @description 创建人
   */
  createUserId: number;
  /** @description 创建人名称 */
  createUserName: string;
  /** @description 模块描述 */
  description: string;
  /**
   * Format: int32
   * @description 状态（是否禁用: 0否，1是；字典：enabled_disabled_enum）
   */
  disabled: number;
  /** @description 模块代码 */
  moduleCode: string;
  /**
   * Format: int64
   * @description 模块ID
   */
  moduleId: number;
  /** @description 模块名称 */
  moduleName: string;
  /** @description 最新更新时间（格式：yyyy-MM-dd HH:mm:ss） */
  rowUpdateTime: string;
  /**
   * Format: int32
   * @description 排序序号（越小越靠前）
   */
  sortNumber: number;
}
/** @description 返回给调用方的具体数据 */
export type ListUsingPOST_6Result = {
  /**
   * Format: int64
   * @description 创建人
   */
  createUserId: number;
  /** @description 创建人名称 */
  createUserName: string;
  /** @description 模块描述 */
  description: string;
  /**
   * Format: int32
   * @description 状态（是否禁用: 0否，1是；字典：enabled_disabled_enum）
   */
  disabled: number;
  /** @description 模块代码 */
  moduleCode: string;
  /**
   * Format: int64
   * @description 模块ID
   */
  moduleId: number;
  /** @description 模块名称 */
  moduleName: string;
  /** @description 最新更新时间（格式：yyyy-MM-dd HH:mm:ss） */
  rowUpdateTime: string;
  /**
   * Format: int32
   * @description 排序序号（越小越靠前）
   */
  sortNumber: number;
}[];
/** ModuleQueryReq */
export interface ModuleQueryReq {
  /**
   * Format: int32
   * @description 查询的模块状态: 0-启用，1-禁用，为空查询所有。字典：enabled_disabled_enum
   */
  disabled: number;
  /**
   * Format: int32
   * @description 页码，默认为1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示数量，默认为10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
}
/** PageResponse«ModuleRsp» */
export interface PageUsingPOST_1Result {
  /** @description 数据 */
  list: {
    /**
     * Format: int64
     * @description 创建人
     */
    createUserId: number;
    /** @description 创建人名称 */
    createUserName: string;
    /** @description 模块描述 */
    description: string;
    /**
     * Format: int32
     * @description 状态（是否禁用: 0否，1是；字典：enabled_disabled_enum）
     */
    disabled: number;
    /** @description 模块代码 */
    moduleCode: string;
    /**
     * Format: int64
     * @description 模块ID
     */
    moduleId: number;
    /** @description 模块名称 */
    moduleName: string;
    /** @description 最新更新时间（格式：yyyy-MM-dd HH:mm:ss） */
    rowUpdateTime: string;
    /**
     * Format: int32
     * @description 排序序号（越小越靠前）
     */
    sortNumber: number;
  }[];
  /**
   * Format: int64
   * @description 总数
   */
  total: number;
}
/** ModuleStatusUpdateReq */
export interface ModuleStatusUpdateReq {
  /**
   * Format: int32
   * @description 是否禁用: 0否，1是；字典：enabled_disabled_enum
   */
  disabled: number;
  /**
   * Format: int64
   * @description 模块ID
   */
  moduleId: number;
}
/** ModuleUpdateReq */
export interface ModuleUpdateReq {
  /** @description 模块描述 */
  description: string;
  /** @description 模块代码 */
  moduleCode: string;
  /**
   * Format: int64
   * @description 模块ID
   */
  moduleId: number;
  /** @description 模块名称 */
  moduleName: string;
  /**
   * Format: int32
   * @description 排序
   */
  sortNumber: number;
}
/** RoleAddReq */
export interface RoleAddReq {
  /** @description 角色名称 */
  roleName: string;
  /**
   * Format: int32
   * @description 排序序号（越小越靠前）
   */
  sortNumber: number;
}
/** RoleBindUserReq */
export interface RoleBindUserReq {
  /**
   * Format: int64
   * @description 角色ID
   */
  roleId: number;
  /**
   * Format: int64
   * @description 用户ID
   */
  userId: number;
}
/** RoleAssignMenuReq */
export interface RoleAssignMenuReq {
  /** @description 菜单ID集合 */
  menuIds: number[];
  /**
   * Format: int64
   * @description 角色ID
   */
  roleId: number;
}
/** RoleRsp */
export interface DetailUsingPOST_5Result {
  /**
   * Format: int64
   * @description 角色id
   */
  roleId: number;
  /** @description 角色名称 */
  roleName: string;
}
/** @description 返回给调用方的具体数据 */
export type GetRoleInfoByUserIdUsingPOSTResult = {
  /**
   * Format: int64
   * @description 角色id
   */
  roleId: number;
  /** @description 角色名称 */
  roleName: string;
}[];
/** UserDetailRequest */
export interface UserDetailRequest {
  /**
   * Format: int64
   * @description 用户id
   */
  id: number;
  /**
   * Format: int64
   * @description 租户id
   */
  tenantId: number;
}
/** FixedRoleAddReq */
export interface FixedRoleAddReq {
  /** @description 业务类型:dict:role_business_type_enum */
  businessType: string;
  /** @description 内置角色ids */
  inlayRoleIds: number[];
  /** @description 角色名称 */
  roleName: string;
  /**
   * Format: int32
   * @description 排序序号（越小越靠前）
   */
  sortNumber: number;
  /**
   * Format: int64
   * @description 租户id
   */
  tenantId: number;
}
/** PageResponse«FixedRoleRsp» */
export interface FixedRolePageUsingPOSTResult {
  /** @description 数据 */
  list: {
    /** @description 业务类型 */
    businessType: string;
    /** @description 创建时间 */
    createTime: string;
    /**
     * Format: int64
     * @description 角色ID
     */
    roleId: number;
    /** @description 角色名称 */
    roleName: string;
  }[];
  /**
   * Format: int64
   * @description 总数
   */
  total: number;
}
/** FixedRoleQueryReq */
export interface FixedRoleQueryReq {
  /**
   * Format: int32
   * @description 页码，默认为1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示数量，默认为10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
  /**
   * Format: int64
   * @description 租户id
   */
  tenantId: number;
}
/** InlayRoleAddReq */
export interface InlayRoleAddReq {
  /** @description 角色名称 */
  roleName: string;
}
/** InlayRoleRsp */
export interface InlayRoleDetailUsingPOSTResult {
  /** @description 维护人名称 */
  operatorName: string;
  /** @description 角色编码 */
  roleCode: string;
  /**
   * Format: int64
   * @description 角色ID
   */
  roleId: number;
  /** @description 角色名称 */
  roleName: string;
  /** @description 更新时间 */
  updateTime: string;
}
/** @description 返回给调用方的具体数据 */
export type InlayRoleListUsingPOSTResult = {
  /** @description 维护人名称 */
  operatorName: string;
  /** @description 角色编码 */
  roleCode: string;
  /**
   * Format: int64
   * @description 角色ID
   */
  roleId: number;
  /** @description 角色名称 */
  roleName: string;
  /** @description 更新时间 */
  updateTime: string;
}[];
/** InlayRoleQueryReq */
export interface InlayRoleQueryReq {
  /**
   * Format: int32
   * @description 页码，默认为1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示数量，默认为10
   */
  pageSize: number;
  /** @description 角色编码 */
  roleCode: string;
  /** @description 角色名称(模糊查询) */
  roleNameLike: string;
  /** Format: int32 */
  start: number;
}
/** PageResponse«InlayRoleRsp» */
export interface InlayRolePageUsingPOSTResult {
  /** @description 数据 */
  list: {
    /** @description 维护人名称 */
    operatorName: string;
    /** @description 角色编码 */
    roleCode: string;
    /**
     * Format: int64
     * @description 角色ID
     */
    roleId: number;
    /** @description 角色名称 */
    roleName: string;
    /** @description 更新时间 */
    updateTime: string;
  }[];
  /**
   * Format: int64
   * @description 总数
   */
  total: number;
}
/** InlayRoleUpdateReq */
export interface InlayRoleUpdateReq {
  /**
   * Format: int64
   * @description 角色ID
   */
  roleId: number;
  /** @description 角色名称 */
  roleName: string;
}
/** RoleListReq */
export interface RoleListReq {
  /** @description 角色编码 */
  roleCode: string;
  /** @description 角色名称模糊搜索 */
  roleNameLike: string;
}
/** @description 返回给调用方的具体数据 */
export type ListByUserIdUsingPOSTResult = {
  /** @description 是否已分配 */
  assignFlag: boolean;
  /** @description 角色编码 */
  roleCode: string;
  /**
   * Format: int64
   * @description 角色ID
   */
  roleId: number;
  /** @description 角色名称 */
  roleName: string;
  /**
   * Format: int32
   * @description 角色类型（系统内置0 普通1 内置2 固定3）
   */
  roleType: number;
  /**
   * Format: int32
   * @description 排序序号（越小越靠前）
   */
  sortNumber: number;
}[];
/** RoleListByUserReq */
export interface RoleListByUserReq {
  /**
   * Format: int64
   * @description 用户ID
   */
  userId: number;
}
/** PageResponse«RoleRsp» */
export interface PageUsingPOST_2Result {
  /** @description 数据 */
  list: {
    /**
     * Format: int64
     * @description 角色id
     */
    roleId: number;
    /** @description 角色名称 */
    roleName: string;
  }[];
  /**
   * Format: int64
   * @description 总数
   */
  total: number;
}
/** RolePageReq */
export interface RolePageReq {
  /**
   * Format: int32
   * @description 页码，默认为1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示数量，默认为10
   */
  pageSize: number;
  /** @description 角色编码 */
  roleCode: string;
  /** @description 角色名称模糊搜索 */
  roleNameLike: string;
  /** Format: int32 */
  start: number;
}
/** RoleUpdateReq */
export interface RoleUpdateReq {
  /**
   * Format: int64
   * @description 角色ID
   */
  roleId: number;
  /** @description 角色名称 */
  roleName: string;
  /**
   * Format: int32
   * @description 排序序号（越小越靠前）
   */
  sortNumber: number;
}
/** RoleDataPermissionRsp */
export interface AddUsingPOST_4Result {
  /**
   * Format: int64
   * @description 授权对象ID
   */
  authorityTargetId: number;
  /** @description 授权对象名称 */
  authorityTargetName: string;
  /** @description 授权对象类型 */
  authorityTargetType: string;
  /** @description 授权对象类型 */
  authorityTargetTypeText: string;
  /** @description 数据模块 */
  dataModule: string;
  /** @description 数据模块名称 */
  dataModuleName: string;
  /**
   * Format: int64
   * @description 部门ID
   */
  departmentId: number;
  /** @description 部门名称 */
  departmentName: string;
  /** @description 权限范围 */
  permissionRange: string;
  /** @description 权限范围文本 */
  permissionRangeText: string;
  /**
   * Format: int64
   * @description 数据权限ID
   */
  roleDataPermissionId: number;
}
/** RoleDataPermissionAddReq */
export interface RoleDataPermissionAddReq {
  /**
   * Format: int64
   * @description 权限开通对象
   */
  authorityTargetId: number;
  /** @description 权限开放类型(系统字典：data_permission_target_type   user:用户,role:角色) */
  authorityTargetType: string;
  /** @description 数据模块 */
  dataModule: string;
  /**
   * Format: int64
   * @description 部门ID
   */
  departmentId: number;
  /** @description 权限范围(系统字典：data_permission_range  department:部门,department_and_children:部门及以下) */
  permissionRange: string;
}
/** RoleDataPermissionDeleteReq */
export interface RoleDataPermissionDeleteReq {
  /**
   * Format: int64
   * @description 数据权限ID
   */
  roleDataPermissionId: number;
}
/** RoleDataPermissionIdReq */
export interface RoleDataPermissionIdReq {
  /**
   * Format: int64
   * @description 数据权限ID
   */
  roleDataPermissionId: number;
}
/** PageResponse«RoleDataPermissionRsp» */
export interface PageUsingPOST_3Result {
  list: {
    /**
     * Format: int64
     * @description 授权对象ID
     */
    authorityTargetId: number;
    /** @description 授权对象名称 */
    authorityTargetName: string;
    /** @description 授权对象类型 */
    authorityTargetType: string;
    /** @description 授权对象类型 */
    authorityTargetTypeText: string;
    /** @description 数据模块 */
    dataModule: string;
    /** @description 数据模块名称 */
    dataModuleName: string;
    /**
     * Format: int64
     * @description 部门ID
     */
    departmentId: number;
    /** @description 部门名称 */
    departmentName: string;
    /** @description 权限范围 */
    permissionRange: string;
    /** @description 权限范围文本 */
    permissionRangeText: string;
    /**
     * Format: int64
     * @description 数据权限ID
     */
    roleDataPermissionId: number;
  }[];
  /** Format: int64 */
  total: number;
}
/** RoleDataPermissionPageReq */
export interface RoleDataPermissionPageReq {
  /** @description 数据模块 */
  dataModule: string;
  /**
   * Format: int32
   * @description 页码，默认为1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示数量，默认为10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
}
/** RoleDataPermissionUpdateReq */
export interface RoleDataPermissionUpdateReq {
  /** @description 权限开通对象 */
  authorityTargetId: string;
  /** @description 权限开放类型 */
  authorityTargetType: string;
  /** @description 数据模块 */
  dataModule: string;
  /**
   * Format: int64
   * @description 部门ID
   */
  departmentId: number;
  /** @description 权限范围 */
  permissionRange: string;
  /**
   * Format: int64
   * @description 数据权限ID
   */
  roleDataPermissionId: number;
}
/** LoginRsp */
export interface ChangeTenantUsingPOSTResult {
  /** @description 企业名称 */
  companyName: string;
  /** @description 企业简称 */
  companySimpleName: string;
  /** @description 所属部门 */
  departmentName: string;
  /** @description 是否首次登陆，true->是，false->否 */
  firstLogin: boolean;
  /** @description 登录时间，格式：yyyy-MM-dd HH:mm:ss） */
  loginDate: string;
  /** @description 用户手机号 */
  mobile: string;
  /** @description 是否只有一个租户;true->是，false->否 */
  onlyOneTenant: boolean;
  /** @description 租户logo，绝对路径 */
  tenantLogoUrl: string;
  /** @description 是否提示需要修改密码（首次登录） */
  tipChangePassword: boolean;
  /** @description token */
  token: string;
  /** @description 用户账号 */
  userAccount: string;
  /**
   * Format: int64
   * @description 用户ID
   */
  userId: number;
  /** @description 用户姓名 */
  userName: string;
}
/** TenantIdReq */
export interface TenantIdReq {
  /**
   * Format: int64
   * @description 租户id
   */
  tenantId: number;
}
/** TokenResponse */
export interface AuthTokenUsingPOSTResult {
  /** Format: int64 */
  accountId: number;

  companyName: string;

  delegateUser: boolean;

  deptNames: string[];

  licenseCode: string;

  loginSrc: string;

  masterAdmin: boolean;

  mobile: string;

  roleNames: string[];
  /** Format: int64 */
  tenantId: number;

  token: string;

  userAccount: string;
  /** Format: int64 */
  userId: number;

  userName: string;
}
/** TokenAuthRequest */
export interface TokenAuthRequest {
  token: string;
}
/** UserIdRequest */
export interface UserIdRequest {
  /** Format: int64 */
  userId: number;
}
/** KickLoginUserRequest */
export interface KickLoginUserRequest {
  /** @description 用户登录渠道（枚举类：login_src_enum; 手机应用：app，浏览器：web） */
  loginSrc: string;
  /** @description 用户Id列表 */
  userId: number[];
}
/** ForgetPwdModifyPwdReq */
export interface ForgetPwdModifyPwdReq {
  /** @description 第一次输入的新密码（RSA加密后） */
  firstPassword: string;
  /** @description 第二次输入的新密码（RSA加密后） */
  secondPassword: string;
  /** @description 账号 */
  userAccount: string;
}
/** ForgetPwdSendSmsReq */
export interface ForgetPwdSendSmsReq {
  /** CaptchaVerifyReq */
  captchaVerifyReq: {
    randstr: string;

    ticket: string;
  };
  /** @description 账号 */
  userAccount: string;
}
/** ForgetPwdValidateSmsReq */
export interface ForgetPwdValidateSmsReq {
  /** @description 账号 */
  userAccount: string;
  /** @description 验证码 */
  verificationCode: string;
}
/** @description 返回给调用方的具体数据 */
export type FrontModuleDefineUsingGETResult = {
  /** @description 模块名 */
  moduleName: string;
  /** @description 域名 */
  realmName: string;
}[];
/** KickUserReq */
export interface KickUserReq {
  /** @description 用户登录渠道（枚举类：login_src_enum; 手机应用：app，浏览器：web） */
  loginSrc: string;
  /** @description 用户Id列表 */
  userId: number[];
}
/** LoginReq */
export interface LoginReq {
  /** @description 密码（RSA加密后） */
  password: string;
  /**
   * Format: int64
   * @description 租户ID
   */
  tenantId: number;
  /** @description 登录账号 */
  userAccount: string;
}
/** MockTenantLoginReq */
export interface MockTenantLoginReq {
  requestIp: string;
  /**
   * Format: int64
   * @description 租户ID
   */
  tenantId: number;
}
/** LoginBySendSmsReq */
export interface LoginBySendSmsReq {
  /** CaptchaVerifyReq */
  captchaVerifyReq: {
    randstr: string;

    ticket: string;
  };
  /** @description 登录账号 */
  userAccount: string;
}
/** LoginByValidateSmsReq */
export interface LoginByValidateSmsReq {
  /**
   * Format: int64
   * @description 租户ID（多租户必填）
   */
  tenantId: number;
  /** @description 登录账号 */
  userAccount: string;
  /** @description 验证码 */
  verificationCode: string;
}
/** ModifyPwdReq */
export interface ModifyPwdReq {
  /** @description 第一次输入的新密码（RSA加密后） */
  firstPassword: string;
  /** @description 原密码（RSA加密后） */
  originalPassword: string;
  /** @description 第二次输入的新密码（RSA加密后） */
  secondPassword: string;
}
/** TenantAddReq */
export interface TenantAddReq {
  /** @description 企业名称 */
  companyName: string;
  /** @description 公司简称 */
  companySimpleName: string;
  /** @description 统一社会信用代码 */
  licenseCode: string;
  /** @description 主管理员手机号 */
  masterAdminMobile: string;
  /** @description 企业主管理员姓名 */
  masterAdminName: string;
  /** @description 租户标签(多个):dict:tenant_label_enum */
  tenantLabels: string[];
  /** @description 租户logo，传文件服务器返回的url地址 */
  tenantLogoUrl: string;
}
/** TenantAssignPermissionsReq */
export interface TenantAssignPermissionsReq {
  /** @description 菜单ID集合 */
  menuIds: number[];
  /**
   * Format: int64
   * @description 模块id
   */
  moduleId: number;
  /**
   * Format: int64
   * @description 租户id
   */
  tenantId: number;
}
/** TenantChangeAdministratorReq */
export interface TenantChangeAdministratorReq {
  /**
   * Format: int64
   * @description 主键id
   */
  id: number;
  /**
   * Format: int64
   * @description 新主管理员id，对应用户的主键
   */
  masterAdminId: number;
}
/** TenantRsp */
export interface DetailUsingPOST_7Result {
  /** @description 是否可以以管理员登录 */
  canLoginByAdmin: boolean;
  /** @description 认证状态(0:未认证,1:已认证)dict:cert_status_enum */
  certStatus: string;
  /** @description 企业名称 */
  companyName: string;
  /** @description 公司简称 */
  companySimpleName: string;
  /**
   * Format: int64
   * @description 主键id
   */
  id: number;
  /**
   * Format: int32
   * @description 是否禁用: 0否，1是
   */
  isDisabled: number;
  /** @description 是否禁用文本 */
  isDisabledText: string;
  /** @description 统一社会信用代码 */
  licenseCode: string;
  /** @description 主管理员登录账号 */
  masterAdminAccount: string;
  /** @description 主管理员手机号 */
  masterAdminMobile: string;
  /** @description 企业主管理员姓名 */
  masterAdminName: string;
  /** @description 是否租户管理员，true->是，false->否 */
  tenantAdmin: boolean;
  /** @description 租户编码 */
  tenantCode: string;
  /** @description 租户标签文本 */
  tenantLabelText: string;
  /** @description 租户标签(多个)dict:tenant_label_enum */
  tenantLabels: string[];
  /** @description 租户logo，绝对路径 */
  tenantLogoUrl: string;
}
/** EnableOrDisableReq */
export interface EnableOrDisableReq {
  /**
   * Format: int64
   * @description 主键id
   */
  id: number;
  /**
   * Format: int32
   * @description 状态：0-启用,1-禁用
   */
  state: number;
}
/** TenantResponse */
export interface DetailUsingPOST_10Result {
  /** @description 企业名称 */
  companyName: string;
  /** @description 公司简称 */
  companySimpleName: string;
  /** @description 创建时间文本（格式：yyyy-MM-dd HH:mm:ss） */
  createTimeText: string;
  /**
   * Format: int32
   * @description 是否禁用: 0否，1是
   */
  isDisabled: number;
  /** @description 是否禁用文本 */
  isDisabledText: string;
  /** @description 统一社会信用代码 */
  licenseCode: string;
  /** @description 主管理员账号 */
  masterAdminAccount: string;
  /** @description 主管理员邮箱 */
  masterAdminEmail: string;
  /**
   * Format: int64
   * @description 主管理员用户id
   */
  masterAdminId: number;
  /** @description 主管理员手机号 */
  masterAdminMobile: string;
  /** @description 主管理员姓名 */
  masterAdminName: string;
  /** @description 租户编码 */
  tenantCode: string;
  /**
   * Format: int64
   * @description 租户ID
   */
  tenantId: number;
  /** @description 租户logo路径 */
  tenantLogoUrl: string;
}
/** TenantDetailRequest */
export interface TenantDetailRequest {
  /** @description 统一社会信用代码 */
  licenseCode: string;
  /** @description 租户编码 */
  tenantCode: string;
  /**
   * Format: int64
   * @description 租户id
   */
  tenantId: number;
}
/** @description 返回给调用方的具体数据 */
export type ListUsingPOST_10Result = {
  /** @description 企业名称 */
  companyName: string;
  /** @description 公司简称 */
  companySimpleName: string;
  /** @description 创建时间文本（格式：yyyy-MM-dd HH:mm:ss） */
  createTimeText: string;
  /**
   * Format: int32
   * @description 是否禁用: 0否，1是
   */
  isDisabled: number;
  /** @description 是否禁用文本 */
  isDisabledText: string;
  /** @description 统一社会信用代码 */
  licenseCode: string;
  /** @description 主管理员账号 */
  masterAdminAccount: string;
  /** @description 主管理员邮箱 */
  masterAdminEmail: string;
  /**
   * Format: int64
   * @description 主管理员用户id
   */
  masterAdminId: number;
  /** @description 主管理员手机号 */
  masterAdminMobile: string;
  /** @description 主管理员姓名 */
  masterAdminName: string;
  /** @description 租户编码 */
  tenantCode: string;
  /**
   * Format: int64
   * @description 租户ID
   */
  tenantId: number;
  /** @description 租户logo路径 */
  tenantLogoUrl: string;
}[];
/** TenantListRequest */
export interface TenantListRequest {
  /** @description 企业名称（模糊搜索） */
  companyNameLike: string;
  /** @description 包含模块code(具体值见ModuleEnum类) */
  containModuleCode: string;
  /** @description 包含模块code集合(具体值见ModuleEnum类) */
  containModuleCodeList: string[];
  /**
   * Format: int32
   * @description 是否禁用: 0否，1是
   */
  isDisabled: number;
  /** @description 统一社会信用代码列表 */
  licenseCodeList: string[];
  /** @description 主管理员手机号（模糊搜索） */
  masterAdminMobileLike: string;
  /** @description 主管理员姓名（模糊搜索） */
  masterAdminNameLike: string;
  /**
   * Format: int32
   * @description 页码，默认为1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示数量，默认为10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
  /** @description 租户编码列表 */
  tenantCodeList: string[];
  /** @description 租户id列表 */
  tenantIdList: number[];
}
/** PageResponse«TenantResponse» */
export interface PageUsingPOST_6Result {
  /** @description 数据 */
  list: {
    /** @description 企业名称 */
    companyName: string;
    /** @description 公司简称 */
    companySimpleName: string;
    /** @description 创建时间文本（格式：yyyy-MM-dd HH:mm:ss） */
    createTimeText: string;
    /**
     * Format: int32
     * @description 是否禁用: 0否，1是
     */
    isDisabled: number;
    /** @description 是否禁用文本 */
    isDisabledText: string;
    /** @description 统一社会信用代码 */
    licenseCode: string;
    /** @description 主管理员账号 */
    masterAdminAccount: string;
    /** @description 主管理员邮箱 */
    masterAdminEmail: string;
    /**
     * Format: int64
     * @description 主管理员用户id
     */
    masterAdminId: number;
    /** @description 主管理员手机号 */
    masterAdminMobile: string;
    /** @description 主管理员姓名 */
    masterAdminName: string;
    /** @description 租户编码 */
    tenantCode: string;
    /**
     * Format: int64
     * @description 租户ID
     */
    tenantId: number;
    /** @description 租户logo路径 */
    tenantLogoUrl: string;
  }[];
  /**
   * Format: int64
   * @description 总数
   */
  total: number;
}
/** PageResponse«UserTenantResponse» */
export interface PageByTenantLabelUsingPOSTResult {
  /** @description 数据 */
  list: {
    /** @description 公司名称 */
    companyName: string;
    /** @description 手机号码 */
    mobile: string;
    /**
     * Format: int64
     * @description 租户主键id
     */
    tenantId: number;
    /**
     * Format: int64
     * @description 用户主键id
     */
    userId: number;
    /** @description 用户姓名 */
    userName: string;
  }[];
  /**
   * Format: int64
   * @description 总数
   */
  total: number;
}
/** UserTenantRequest */
export interface UserTenantRequest {
  /** @description 查询参数：供应商名称，联系人，手机号 三合一模糊查询 */
  keyword: string;
  /**
   * Format: int32
   * @description 页码，默认为1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示数量，默认为10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
  /** @description 租户标签 */
  tenantLabel: string;
}
/** @description 返回给调用方的具体数据 */
export type ListUsingPOST_8Result = {
  /** @description 是否可以以管理员登录 */
  canLoginByAdmin: boolean;
  /** @description 认证状态(0:未认证,1:已认证)dict:cert_status_enum */
  certStatus: string;
  /** @description 企业名称 */
  companyName: string;
  /** @description 公司简称 */
  companySimpleName: string;
  /**
   * Format: int64
   * @description 主键id
   */
  id: number;
  /**
   * Format: int32
   * @description 是否禁用: 0否，1是
   */
  isDisabled: number;
  /** @description 是否禁用文本 */
  isDisabledText: string;
  /** @description 统一社会信用代码 */
  licenseCode: string;
  /** @description 主管理员登录账号 */
  masterAdminAccount: string;
  /** @description 主管理员手机号 */
  masterAdminMobile: string;
  /** @description 企业主管理员姓名 */
  masterAdminName: string;
  /** @description 是否租户管理员，true->是，false->否 */
  tenantAdmin: boolean;
  /** @description 租户编码 */
  tenantCode: string;
  /** @description 租户标签文本 */
  tenantLabelText: string;
  /** @description 租户标签(多个)dict:tenant_label_enum */
  tenantLabels: string[];
  /** @description 租户logo，绝对路径 */
  tenantLogoUrl: string;
}[];
/** TenantListReq */
export interface TenantListReq {
  /** @description 企业名称，支持全模糊 */
  companyNameLike: string;
  /** @description 统一社会信用代码 */
  licenseCode: string;
}
/** @description 返回给调用方的具体数据 */
export type ListTenantByUserAccountUsingPOSTResult = {
  /** @description 企业名称 */
  companyName: string;
  /** @description 公司简称 */
  companySimpleName: string;
  /** @description 所属部门 */
  departmentName: string;
  /** @description 统一社会信用代码 */
  licenseCode: string;
  /**
   * Format: int64
   * @description 租户id
   */
  tenantId: number;
  /** @description 租户logo，绝对路径 */
  tenantLogoUrl: string;
}[];
/** TenantListByUserAccountReq */
export interface TenantListByUserAccountReq {
  /** @description 登录账号 */
  userAccount: string;
}
/** PageResponse«TenantRsp» */
export interface PageUsingPOST_4Result {
  /** @description 数据 */
  list: {
    /** @description 是否可以以管理员登录 */
    canLoginByAdmin: boolean;
    /** @description 认证状态(0:未认证,1:已认证)dict:cert_status_enum */
    certStatus: string;
    /** @description 企业名称 */
    companyName: string;
    /** @description 公司简称 */
    companySimpleName: string;
    /**
     * Format: int64
     * @description 主键id
     */
    id: number;
    /**
     * Format: int32
     * @description 是否禁用: 0否，1是
     */
    isDisabled: number;
    /** @description 是否禁用文本 */
    isDisabledText: string;
    /** @description 统一社会信用代码 */
    licenseCode: string;
    /** @description 主管理员登录账号 */
    masterAdminAccount: string;
    /** @description 主管理员手机号 */
    masterAdminMobile: string;
    /** @description 企业主管理员姓名 */
    masterAdminName: string;
    /** @description 是否租户管理员，true->是，false->否 */
    tenantAdmin: boolean;
    /** @description 租户编码 */
    tenantCode: string;
    /** @description 租户标签文本 */
    tenantLabelText: string;
    /** @description 租户标签(多个)dict:tenant_label_enum */
    tenantLabels: string[];
    /** @description 租户logo，绝对路径 */
    tenantLogoUrl: string;
  }[];
  /**
   * Format: int64
   * @description 总数
   */
  total: number;
}
/** TenantPageReq */
export interface TenantPageReq {
  /** @description 企业名称，支持全模糊 */
  companyNameLike: string;
  /** @description 企业主管理员姓名，支持全模糊 */
  masterAdminNameLike: string;
  /**
   * Format: int32
   * @description 页码，默认为1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示数量，默认为10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
  /**
   * Format: int32
   * @description 状态，对应枚举：yes_no_enum
   */
  state: number;
}
/** PersonTenantAddReq */
export interface PersonTenantAddReq {
  /** @description 角色编码：数组，支持多个 */
  roleCodes: string[];
  /** @description 手机号 */
  tenantMobile: string;
  /** @description 姓名 */
  tenantName: string;
}
/** PersonTenantRsp */
export interface PersonTenantDetailUsingPOSTResult {
  /** @description 账号 */
  tenantAccount: string;
  /** @description 租户编码 */
  tenantCode: string;
  /** @description 手机号 */
  tenantMobile: string;
  /** @description 姓名 */
  tenantName: string;
}
/** PageResponse«PersonTenantRsp» */
export interface PersonTenantPageUsingPOSTResult {
  /** @description 数据 */
  list: {
    /** @description 账号 */
    tenantAccount: string;
    /** @description 租户编码 */
    tenantCode: string;
    /** @description 手机号 */
    tenantMobile: string;
    /** @description 姓名 */
    tenantName: string;
  }[];
  /**
   * Format: int64
   * @description 总数
   */
  total: number;
}
/** PersonTenantQueryReq */
export interface PersonTenantQueryReq {
  /**
   * Format: int32
   * @description 页码，默认为1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示数量，默认为10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
  /** @description 手机号 */
  tenantMobile: string;
  /** @description 姓名 */
  tenantName: string;
}
/** PersonTenantUpdateReq */
export interface PersonTenantUpdateReq {
  /**
   * Format: int64
   * @description 主键id
   */
  id: number;
  /** @description 手机号 */
  tenantMobile: string;
  /** @description 姓名 */
  tenantName: string;
}
/** TenantUpdateReq */
export interface TenantUpdateReq {
  /** @description 企业名称 */
  companyName: string;
  /** @description 公司简称 */
  companySimpleName: string;
  /**
   * Format: int64
   * @description 主键id
   */
  id: number;
  /** @description 统一社会信用代码 */
  licenseCode: string;
  /** @description 企业主管理员姓名 */
  masterAdminName: string;
  /** @description 租户标签(多个) */
  tenantLabels: string[];
  /** @description 租户logo，传文件服务器返回的url地址 */
  tenantLogoUrl: string;
}
/** TenantDictAddReq */
export interface TenantDictAddReq {
  /** @description 字典代码 */
  dictCode: string;
  /** @description 字典描述 */
  dictDesc: string;
  /** @description 选项列表 */
  dictDetailList: {
    /** @description 选项文本 */
    optionName: string;
    /** @description 选项值 */
    optionValue: string;
  }[];
  /** @description 字典名称 */
  dictName: string;
}
/** TenantDictDeleteReq */
export interface TenantDictDeleteReq {
  /**
   * Format: int64
   * @description 租户字典id
   */
  tenantDictId: number;
}
/** TenantDictDetailReq */
export interface TenantDictDetailReq {
  /** @description 字典编码（字典ID与字典编码二选一必填） */
  dictCode: string;
  /**
   * Format: int64
   * @description 字典ID（字典ID与字典编码二选一必填）
   */
  dictId: number;
  /**
   * Format: int64
   * @description 租户id
   */
  tenantId: number;
}
/** TenantDictOptionDetailReq */
export interface TenantDictOptionDetailReq {
  /** @description 字典编码（字典ID与字典编码二选一必填） */
  dictCode: string;
  /**
   * Format: int64
   * @description 字典ID（字典ID与字典编码二选一必填）
   */
  dictId: number;
  /** @description 字典明细编码 */
  dictOptionCode: string;
  /**
   * Format: int64
   * @description 租户id
   */
  tenantId: number;
}
/** TenantDictListReq */
export interface TenantDictListReq {
  /** @description 字典名称 */
  dictNameLike: string;
  /**
   * Format: int64
   * @description 租户id
   */
  tenantId: number;
}
/** TenantDictQueryReq */
export interface TenantDictQueryReq {
  /** @description 字典名称 */
  dictNameLike: string;
  /**
   * Format: int32
   * @description 页码，默认为1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示数量，默认为10
   */
  pageSize: number;
  /** Format: int32 */
  start: number;
}
/** TenantDictUpdateReq */
export interface TenantDictUpdateReq {
  /** @description 字典代码 */
  dictCode: string;
  /** @description 字典描述 */
  dictDesc: string;
  /** @description 选项列表 */
  dictDetailList: {
    /** @description 选项文本 */
    optionName: string;
    /** @description 选项值 */
    optionValue: string;
  }[];
  /** @description 字典名称 */
  dictName: string;
  /**
   * Format: int64
   * @description 租户字典id
   */
  tenantDictId: number;
}
/** UserWithDeptAndRoleAddReq */
export interface UserWithDeptAndRoleAddReq {
  /** @description 部门ids：数组，支持多个 */
  deptIds: number[];
  /** @description 手机号 */
  mobile: string;
  /** @description 发送的短信中是否带初始密码（非必填，默认带，由业务方自己决定） */
  needSendPwd: boolean;
  /** @description 账号是否设置初始密码（非必填，默认设置） */
  needSetUpPwd: boolean;
  /** @description 角色ids：数组，支持多个 */
  roleIds: number[];
  /** @description 用户姓名 */
  userName: string;
}
/** UserAddReq */
export interface UserAddReq {
  /** @description 部门ids：数组，支持多个 */
  deptIds: number[];
  /** @description 手机号 */
  mobile: string;
  /** @description 性别: woman-女，man-男 */
  sex: string;
  /** @description 用户姓名 */
  userName: string;
}
/** UserRoleAssignReq */
export interface UserRoleAssignReq {
  /**
   * Format: int64
   * @description 角色id
   */
  roleId: number;
  /**
   * Format: int64
   * @description 用户id
   */
  userId: number;
}
/** UserRsp */
export interface DetailUsingPOST_11Result {
  /** @description 此用户是否当前登录用户: true-是，false-否 */
  currentLoginUser: boolean;
  /** @description 部门ids */
  departmentIds: number[];
  /** @description 部门名称，多个以逗号分隔 */
  departmentNames: string;
  /** @description 用户的部门列表 */
  departments: {
    /**
     * Format: int64
     * @description 部门id
     */
    departmentId: number;
    /** @description 部门名称 */
    departmentName: string;
  }[];
  /** @description 电子邮箱 */
  email: string;
  /**
   * Format: int64
   * @description 主键id
   */
  id: number;
  /**
   * Format: int32
   * @description 是否禁用: 0否，1是
   */
  isDisabled: number;
  /** @description 是否禁用文本 */
  isDisabledText: string;
  /** @description 最后登陆时间，格式：yyyy-MM-dd HH:mm:ss */
  lastLoginDate: string;
  /** @description 最后登陆IP */
  lastLoginIp: string;
  /** @description 此用户是否主管理员: true-是，false-否 */
  masterAdmin: boolean;
  /** @description 手机号码 */
  mobile: string;
  /** @description 角色ids */
  roleIds: number[];
  /** @description 用户角色，多个以逗号分隔 */
  roleNames: string;
  /** @description 用户的角色列表 */
  roles: {
    /**
     * Format: int64
     * @description 角色id
     */
    roleId: number;
    /** @description 角色名称 */
    roleName: string;
  }[];
  /** @description 用户性别: woman-女，man-男 */
  sex: string;
  /** @description 用户性别文本 */
  sexText: string;
  /**
   * Format: int64
   * @description 租户id
   */
  tenantId: number;
  /** @description 登录账号 */
  userAccount: string;
  /** @description 用户姓名 */
  userName: string;
}
/** UserDetailReq */
export interface UserDetailReq {
  /**
   * Format: int64
   * @description id主键
   */
  id: number;
  /**
   * Format: int64
   * @description 租户id
   */
  tenantId: number;
}
/** @description 返回给调用方的具体数据 */
export type BatchDetailAndDeptIdsUsingPOSTResult = {
  admin: boolean;

  departments: {
    /** @description 部门职能 */
    departmentFunctions: string;
    /**
     * Format: int64
     * @description 部门负责人id
     */
    departmentHeadId: number;
    /** @description 部门负责人姓名 */
    departmentHeadName: string;
    /** @description 部门名称 */
    departmentName: string;
    /**
     * Format: int32
     * @description 部门层级
     */
    hierarchy: number;
    /**
     * Format: int64
     * @description 部门id
     */
    id: number;
    /**
     * Format: int64
     * @description 父部门ID
     */
    parentId: number;
    /** @description 父部门ID逗号分割 */
    parentIds: string;
    /**
     * Format: int32
     * @description 排序序号（越小越靠前）
     */
    sortNumber: number;
  }[];

  mobile: string;

  userAccount: string;
  /** Format: int64 */
  userId: number;

  userName: string;
}[];
/** UserResponse */
export interface DetailUsingPOST_12Result {
  /** @description 电子邮箱 */
  email: string;
  /**
   * Format: int64
   * @description 主键id
   */
  id: number;
  /**
   * Format: int32
   * @description 是否禁用: 0否，1是
   */
  isDisabled: number;
  /** @description 是否禁用文本 */
  isDisabledText: string;
  /** @description 最后登陆时间，格式：yyyy-MM-dd HH:mm:ss */
  lastLoginDate: string;
  /** @description 最后登陆IP */
  lastLoginIp: string;
  /** @description 手机号码 */
  mobile: string;
  /** @description 用户性别: woman-女，man-男 */
  sex: string;
  /** @description 用户性别文本 */
  sexText: string;
  /**
   * Format: int64
   * @description 租户id
   */
  tenantId: number;
  /** @description 登录账号 */
  userAccount: string;
  /** @description 用户姓名 */
  userName: string;
}
/** UserDetailResponse */
export interface DetailAndDeptIdsUsingPOSTResult {
  admin: boolean;

  departments: {
    /** @description 部门职能 */
    departmentFunctions: string;
    /**
     * Format: int64
     * @description 部门负责人id
     */
    departmentHeadId: number;
    /** @description 部门负责人姓名 */
    departmentHeadName: string;
    /** @description 部门名称 */
    departmentName: string;
    /**
     * Format: int32
     * @description 部门层级
     */
    hierarchy: number;
    /**
     * Format: int64
     * @description 部门id
     */
    id: number;
    /**
     * Format: int64
     * @description 父部门ID
     */
    parentId: number;
    /** @description 父部门ID逗号分割 */
    parentIds: string;
    /**
     * Format: int32
     * @description 排序序号（越小越靠前）
     */
    sortNumber: number;
  }[];

  mobile: string;

  userAccount: string;
  /** Format: int64 */
  userId: number;

  userName: string;
}
/** @description 返回给调用方的具体数据 */
export type ListUsingPOST_12Result = {
  /** @description 电子邮箱 */
  email: string;
  /**
   * Format: int64
   * @description 主键id
   */
  id: number;
  /**
   * Format: int32
   * @description 是否禁用: 0否，1是
   */
  isDisabled: number;
  /** @description 是否禁用文本 */
  isDisabledText: string;
  /** @description 最后登陆时间，格式：yyyy-MM-dd HH:mm:ss */
  lastLoginDate: string;
  /** @description 最后登陆IP */
  lastLoginIp: string;
  /** @description 手机号码 */
  mobile: string;
  /** @description 用户性别: woman-女，man-男 */
  sex: string;
  /** @description 用户性别文本 */
  sexText: string;
  /**
   * Format: int64
   * @description 租户id
   */
  tenantId: number;
  /** @description 登录账号 */
  userAccount: string;
  /** @description 用户姓名 */
  userName: string;
}[];
/** UserListRequest */
export interface UserListRequest {
  /** @description 部门id集合 */
  departmentIdList: number[];
  /**
   * Format: int64
   * @description 租户id
   */
  tenantId: number;
  /** @description 用户id集合 */
  userIdList: number[];
}
/** UserRoleRequest */
export interface UserRoleRequest {
  /**
   * Format: int32
   * @description 页码，默认为1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示数量，默认为10
   */
  pageSize: number;
  /** @description 角色业务类型 */
  roleBusinessType: string;
  /** @description 角色名称 */
  roleName: string;
  /** Format: int32 */
  start: number;
  /**
   * Format: int64
   * @description 租户id
   */
  tenantId: number;
  /** @description 手机号码(模糊查询) */
  userMobileLike: string;
  /** @description 用户名称(模糊查询) */
  userNameLike: string;
}
/** PageResponse«UserResponse» */
export interface PageByRoleUsingPOSTResult {
  /** @description 数据 */
  list: {
    /** @description 电子邮箱 */
    email: string;
    /**
     * Format: int64
     * @description 主键id
     */
    id: number;
    /**
     * Format: int32
     * @description 是否禁用: 0否，1是
     */
    isDisabled: number;
    /** @description 是否禁用文本 */
    isDisabledText: string;
    /** @description 最后登陆时间，格式：yyyy-MM-dd HH:mm:ss */
    lastLoginDate: string;
    /** @description 最后登陆IP */
    lastLoginIp: string;
    /** @description 手机号码 */
    mobile: string;
    /** @description 用户性别: woman-女，man-男 */
    sex: string;
    /** @description 用户性别文本 */
    sexText: string;
    /**
     * Format: int64
     * @description 租户id
     */
    tenantId: number;
    /** @description 登录账号 */
    userAccount: string;
    /** @description 用户姓名 */
    userName: string;
  }[];
  /**
   * Format: int64
   * @description 总数
   */
  total: number;
}
/** DepartmentLeaderResponse */
export interface QueryDepartmentLeaderUsingPOSTResult {
  /** Format: int64 */
  leaderId: number;

  userIds: number[];
}
/** @description 返回给调用方的具体数据 */
export interface QueryUserIdAndDeptNameRelationUsingPOSTResult {}
/** @description 返回给调用方的具体数据 */
export type ListUsingPOST_11Result = {
  /** @description 此用户是否当前登录用户: true-是，false-否 */
  currentLoginUser: boolean;
  /** @description 部门ids */
  departmentIds: number[];
  /** @description 部门名称，多个以逗号分隔 */
  departmentNames: string;
  /** @description 用户的部门列表 */
  departments: {
    /**
     * Format: int64
     * @description 部门id
     */
    departmentId: number;
    /** @description 部门名称 */
    departmentName: string;
  }[];
  /** @description 电子邮箱 */
  email: string;
  /**
   * Format: int64
   * @description 主键id
   */
  id: number;
  /**
   * Format: int32
   * @description 是否禁用: 0否，1是
   */
  isDisabled: number;
  /** @description 是否禁用文本 */
  isDisabledText: string;
  /** @description 最后登陆时间，格式：yyyy-MM-dd HH:mm:ss */
  lastLoginDate: string;
  /** @description 最后登陆IP */
  lastLoginIp: string;
  /** @description 此用户是否主管理员: true-是，false-否 */
  masterAdmin: boolean;
  /** @description 手机号码 */
  mobile: string;
  /** @description 角色ids */
  roleIds: number[];
  /** @description 用户角色，多个以逗号分隔 */
  roleNames: string;
  /** @description 用户的角色列表 */
  roles: {
    /**
     * Format: int64
     * @description 角色id
     */
    roleId: number;
    /** @description 角色名称 */
    roleName: string;
  }[];
  /** @description 用户性别: woman-女，man-男 */
  sex: string;
  /** @description 用户性别文本 */
  sexText: string;
  /**
   * Format: int64
   * @description 租户id
   */
  tenantId: number;
  /** @description 登录账号 */
  userAccount: string;
  /** @description 用户姓名 */
  userName: string;
}[];
/** UserListReq */
export interface UserListReq {
  /**
   * Format: int64
   * @description 部门ID
   */
  departmentId: number;
  /** @description 是否排除主管理员：true->是，false-否；默认是不排除的 */
  excludeMasterAdmin: boolean;
  /** @description 手机号精确搜索 */
  mobile: string;
  /** @description 手机号模糊搜索 */
  mobileLike: string;
  /**
   * Format: int64
   * @description 排除的部门id
   */
  notDepartmentId: number;
  /**
   * Format: int64
   * @description 角色ID
   */
  roleId: number;
  /**
   * Format: int32
   * @description 状态，对应枚举：enabled_disabled_enum
   */
  state: number;
  /**
   * Format: int64
   * @description 租户id
   */
  tenantId: number;
  /** @description 用户账号精确搜索 */
  userAccount: string;
  /** @description 用户账号模糊搜索 */
  userAccountLike: string;
  /** @description 用户姓名精确搜索 */
  userName: string;
  /** @description 用户姓名模糊搜索 */
  userNameLike: string;
}
/** PageResponse«UserRsp» */
export interface PageUsingPOST_7Result {
  /** @description 数据 */
  list: {
    /** @description 此用户是否当前登录用户: true-是，false-否 */
    currentLoginUser: boolean;
    /** @description 部门ids */
    departmentIds: number[];
    /** @description 部门名称，多个以逗号分隔 */
    departmentNames: string;
    /** @description 用户的部门列表 */
    departments: {
      /**
       * Format: int64
       * @description 部门id
       */
      departmentId: number;
      /** @description 部门名称 */
      departmentName: string;
    }[];
    /** @description 电子邮箱 */
    email: string;
    /**
     * Format: int64
     * @description 主键id
     */
    id: number;
    /**
     * Format: int32
     * @description 是否禁用: 0否，1是
     */
    isDisabled: number;
    /** @description 是否禁用文本 */
    isDisabledText: string;
    /** @description 最后登陆时间，格式：yyyy-MM-dd HH:mm:ss */
    lastLoginDate: string;
    /** @description 最后登陆IP */
    lastLoginIp: string;
    /** @description 此用户是否主管理员: true-是，false-否 */
    masterAdmin: boolean;
    /** @description 手机号码 */
    mobile: string;
    /** @description 角色ids */
    roleIds: number[];
    /** @description 用户角色，多个以逗号分隔 */
    roleNames: string;
    /** @description 用户的角色列表 */
    roles: {
      /**
       * Format: int64
       * @description 角色id
       */
      roleId: number;
      /** @description 角色名称 */
      roleName: string;
    }[];
    /** @description 用户性别: woman-女，man-男 */
    sex: string;
    /** @description 用户性别文本 */
    sexText: string;
    /**
     * Format: int64
     * @description 租户id
     */
    tenantId: number;
    /** @description 登录账号 */
    userAccount: string;
    /** @description 用户姓名 */
    userName: string;
  }[];
  /**
   * Format: int64
   * @description 总数
   */
  total: number;
}
/** UserPageReq */
export interface UserPageReq {
  /**
   * Format: int64
   * @description 部门ID
   */
  departmentId: number;
  /** @description 部门模糊搜索 */
  deptNameLike: string;
  /** @description 是否排除主管理员：true->是，false-否；默认是不排除的 */
  excludeMasterAdmin: boolean;
  /** @description 手机号模糊搜索 */
  mobileLike: string;
  /**
   * Format: int64
   * @description 排除的部门id
   */
  notDepartmentId: number;
  /**
   * Format: int32
   * @description 页码，默认为1
   */
  pageNum: number;
  /**
   * Format: int32
   * @description 每页显示数量，默认为10
   */
  pageSize: number;
  /**
   * Format: int64
   * @description 角色ID
   */
  roleId: number;
  /** @description 角色模糊搜索 */
  roleNameLike: string;
  /** Format: int32 */
  start: number;
  /**
   * Format: int32
   * @description 状态，对应枚举：enabled_disabled_enum
   */
  state: number;
  /**
   * Format: int64
   * @description 租户id
   */
  tenantId: number;
  /** @description 用户账号模糊搜索 */
  userAccountLike: string;
  /** @description 用户姓名模糊搜索 */
  userNameLike: string;
}
/** MasterAdminTransferReq */
export interface MasterAdminTransferReq {
  /**
   * Format: int64
   * @description 新主管理员id，对应用户的主键
   */
  masterAdminId: number;
}
/** UserUpdateReq */
export interface UserUpdateReq {
  /** @description 部门ids：数组，支持多个 */
  deptIds: number[];
  /**
   * Format: int64
   * @description 主键id
   */
  id: number;
  /** @description 性别: woman-女，man-男 */
  sex: string;
  /** @description 用户姓名 */
  userName: string;
}

/**
 * 查询数据权限定义（单个）
 * @param request request
 */
export function detailUsingPOST(request: DataPermissionDefineQueryRequest) {
  return XHR<DetailUsingPOSTResult>({
    url: "/platform/dataPermissionDefine/feign/detail",
    method: "post",
    data: request,
    mock: {
      dataModule: "@string()",
      dataModuleName: "@name()",
      databaseTable: "@string()",
      groupName: "@name()",
      ownerDepartmentIdColumn: "@id()",
      ownerUserIdColumn: "@id()",
      shareUserIdColumn: "@id()",
    },
  });
}

/**
 * 查询数据权限定义（列表）
 * @param request request
 */
export function listUsingPOST_1(request: DataPermissionDefineQueryRequest) {
  return XHR<ListUsingPOST_1Result>({
    url: "/platform/dataPermissionDefine/feign/list",
    method: "post",
    data: request,
    mock: [
      {
        dataModule: "@string()",
        dataModuleName: "@name()",
        databaseTable: "@string()",
        groupName: "@name()",
        ownerDepartmentIdColumn: "@id()",
        ownerUserIdColumn: "@id()",
        shareUserIdColumn: "@id()",
      },
    ],
  });
}

/**
 * 查询数据模块列表（不分页）
 * @param request request
 */
export function listUsingPOST(request: DataPermissionDefineReq) {
  return XHR<ListUsingPOSTResult>({
    url: "/platform/dataPermissionDefine/list",
    method: "post",
    data: request,
    mock: [
      {
        dataModule: "@string()",
        dataModuleName: "@name()",
      },
    ],
  });
}

/**
 * 查询默认权限
 * @param request request
 */
export function listUsingPOST_2(request: DefaultDataPermissionQueryRequest) {
  return XHR<ListUsingPOST_2Result>({
    url: "/platform/defaultPermission/feign/list",
    method: "post",
    data: request,
    mock: [
      {
        applyEmployeeType: "@string()",
        dataModule: "@string()",
        permissionRange: "@string()",
      },
    ],
  });
}

/**
 * 新增部门
 * @param req req
 */
export function addDepartmentUsingPOST(req: DepartmentAddReq) {
  return XHR<AddDepartmentUsingPOSTResult>({
    url: "/platform/department/addDepartment",
    method: "post",
    data: req,
    mock: {
      id: "@natural()",
    },
  });
}

/**
 * 添加部门成员(支持批量)
 * @param req req
 */
export function addUserDepartmentUsingPOST(req: DeptUserBatchAddReq) {
  return XHR<unknown>({
    url: "/platform/department/addUserDepartment",
    method: "post",
    data: req,
  });
}

/**
 * 调整成员部门
 * @param req req
 */
export function adjustUserDepartmentUsingPOST(req: DeptUserBatchAdjustReq) {
  return XHR<unknown>({
    url: "/platform/department/adjustUserDepartment",
    method: "post",
    data: req,
  });
}

/**
 * 删除部门
 * @param req req
 */
export function deleteDepartmentUsingPOST(req: IdReq) {
  return XHR<unknown>({
    url: "/platform/department/deleteDepartment",
    method: "post",
    data: req,
  });
}

/**
 * 删除部门成员
 * @param req req
 */
export function deleteUserDepartmentUsingPOST(req: DeptUserBatchDeleteReq) {
  return XHR<unknown>({
    url: "/platform/department/deleteUserDepartment",
    method: "post",
    data: req,
  });
}

/**
 * 部门详情
 * @param req req
 */
export function detailDepartmentUsingPOST(req: IdReq) {
  return XHR<DetailDepartmentUsingPOSTResult>({
    url: "/platform/department/detailDepartment",
    method: "post",
    data: req,
    mock: {
      departmentFunctions: "@string()",
      departmentHeadId: "@natural()",
      departmentHeadName: "@name()",
      departmentName: "@name()",
      id: "@natural()",
      parentId: "@natural()",
      parentName: "@name()",
      sortNumber: "@natural()",
    },
  });
}

/**
 * 部门详情
 * @param request request
 */
export function detailUsingPOST_1(request: DepartmentDetailRequest) {
  return XHR<DetailUsingPOST_1Result>({
    url: "/platform/department/feign/detail",
    method: "post",
    data: request,
    mock: {
      departmentFunctions: "@string()",
      departmentHeadId: "@natural()",
      departmentHeadName: "@name()",
      departmentName: "@name()",
      hierarchy: "@natural()",
      id: "@natural()",
      parentId: "@natural()",
      parentIds: "@id()",
      sortNumber: "@natural()",
    },
  });
}

/**
 * 查询部门
 * @param request request
 */
export function listUsingPOST_3(request: DepartmentQueryRequest) {
  return XHR<ListUsingPOST_3Result>({
    url: "/platform/department/feign/list",
    method: "post",
    data: request,
    mock: [
      {
        departmentFunctions: "@string()",
        departmentHeadId: "@natural()",
        departmentHeadName: "@name()",
        departmentName: "@name()",
        hierarchy: "@natural()",
        id: "@natural()",
        parentId: "@natural()",
        parentIds: "@id()",
        sortNumber: "@natural()",
      },
    ],
  });
}

/**
 * 查询用户所属的部门以及下级部门用户（返回部门和用户）
 * @param query query
 */
export function queryBelongDepartmentAndChildUsingPOST(
  query: UserQueryRequest
) {
  return XHR<QueryBelongDepartmentAndChildUsingPOSTResult>({
    url: "/platform/department/feign/queryBelongDepartmentAndChild",
    method: "post",
    data: query,
    mock: {
      "deptIdList|10-20": ["@natural()"],
      "userIdList|10-20": ["@natural()"],
    },
  });
}

/**
 * 模糊查询搜索部门列表
 * @param req req
 */
export function searchDepartmentUsingPOST(req: DepartmentNameSearchReq) {
  return XHR<SearchDepartmentUsingPOSTResult>({
    url: "/platform/department/searchDepartment",
    method: "post",
    data: req,
    mock: [
      {
        departmentName: "@name()",
        id: "@natural()",
      },
    ],
  });
}

/**
      * 部门树列表（不包含用户）

      */
export function treeDepartmentUsingPOST() {
  return XHR<TreeDepartmentUsingPOSTResult>({
    url: "/platform/department/treeDepartment",
    method: "post",
    mock: [
      {
        "children|10-20": [{}],
        departmentName: "@name()",
        hierarchy: "@natural()",
        id: "@natural()",
        parentId: "@natural()",
      },
    ],
  });
}

/**
 * 部门树列表（包含用户）
 * @param req req
 */
export function treeUserUsingPOST(req: DepartmentReq) {
  return XHR<TreeUserUsingPOSTResult>({
    url: "/platform/department/treeUser",
    method: "post",
    data: req,
    mock: [
      {
        "childList|10-20": [{}],
        department: "@boolean()",
        id: "@id()",
        name: "@name()",
        pid: "@id()",
        treeId: "@id()",
        userAccount: "@string()",
      },
    ],
  });
}

/**
 * 修改部门
 * @param req req
 */
export function updateDepartmentUsingPOST(req: DepartmentUpdateReq) {
  return XHR<unknown>({
    url: "/platform/department/updateDepartment",
    method: "post",
    data: req,
  });
}

/**
 * 字典新增
 * @param req req
 */
export function addUsingPOST(req: DictAddReq) {
  return XHR<AddDepartmentUsingPOSTResult>({
    url: "/platform/dict/add",
    method: "post",
    data: req,
    mock: {
      id: "@natural()",
    },
  });
}

/**
 * 字典删除
 * @param req req
 */
export function deleteUsingPOST(req: IdReq) {
  return XHR<unknown>({
    url: "/platform/dict/delete",
    method: "post",
    data: req,
  });
}

/**
 * 字典详情
 * @param req req
 */
export function detailUsingPOST_2(req: IdReq) {
  return XHR<DetailUsingPOST_2Result>({
    url: "/platform/dict/detail",
    method: "post",
    data: req,
    mock: {
      dictCode: "@string()",
      dictDesc: "@string()",
      "dictDetailList|10-20": [
        {
          optionName: "@name()",
          optionValue: "@string()",
        },
      ],
      dictName: "@name()",
      id: "@id()",
      moduleCode: "@string()",
      moduleId: "@natural()",
      moduleName: "@name()",
    },
  });
}

/**
 * 字典详情
 * @param request request
 */
export function detailUsingPOST_3(request: DictDetailReq) {
  return XHR<DetailUsingPOST_3Result>({
    url: "/platform/dict/feign/detail",
    method: "post",
    data: request,
    mock: {},
  });
}

/**
 * 字典明细详情
 * @param request request
 */
export function dictOptionDetailUsingPOST(request: DictOptionDetailReq) {
  return XHR<DictOptionDetailUsingPOSTResult>({
    url: "/platform/dict/feign/dictOptionDetail",
    method: "post",
    data: request,
    mock: {
      label: "@string()",
      value: "@string()",
    },
  });
}

/**
 * 字典列表
 * @param request request
 */
export function listUsingPOST_5(request: DictListReq) {
  return XHR<DetailUsingPOST_3Result>({
    url: "/platform/dict/feign/list",
    method: "post",
    data: request,
    mock: {},
  });
}

/**
 * 字典查询（不分页）
 * @param req req
 */
export function listUsingPOST_4(req: DictQueryReq) {
  return XHR<ListUsingPOST_4Result>({
    url: "/platform/dict/list",
    method: "post",
    data: req,
    mock: [
      {
        dictCode: "@string()",
        dictDesc: "@string()",
        dictName: "@name()",
        id: "@natural()",
        moduleCode: "@string()",
        moduleId: "@natural()",
        moduleName: "@name()",
        options: "@string()",
        rowUpdateTime: "@datetime()",
      },
    ],
  });
}

/**
      * 所有字典

      */
export function listAllUsingGET() {
  return XHR<DetailUsingPOST_3Result>({
    url: "/platform/dict/list/all",
    method: "get",
    mock: {},
  });
} /**
      * 所有字典

      */
export function listAllUsingPOST() {
  return XHR<DetailUsingPOST_3Result>({
    url: "/platform/dict/list/all",
    method: "post",
    mock: {},
  });
}

/**
 * 字典查询（分页）
 * @param req req
 */
export function pageUsingPOST(req: DictQueryReq) {
  return XHR<PageUsingPOSTResult>({
    url: "/platform/dict/page",
    method: "post",
    data: req,
    mock: {
      "list|10-20": [
        {
          dictCode: "@string()",
          dictDesc: "@string()",
          dictName: "@name()",
          id: "@natural()",
          moduleCode: "@string()",
          moduleId: "@natural()",
          moduleName: "@name()",
          options: "@string()",
          rowUpdateTime: "@datetime()",
        },
      ],
      total: "@natural()",
    },
  });
}

/**
 * 字典修改
 * @param req req
 */
export function updateUsingPOST(req: DictUpdateReq) {
  return XHR<unknown>({
    url: "/platform/dict/update",
    method: "post",
    data: req,
  });
}

/**
 * 清空钉钉应用信息
 * @param req req
 */
export function emptyDingTalkUsingPOST(req: EmptyDingTalkReq) {
  return XHR<unknown>({
    url: "/platform/dingTalk/emptyDingTalk",
    method: "post",
    data: req,
  });
}

/**
 * 根据用户id获取所有角色
 * @param request request
 */
export function checkDingTalkConfigUsingPOST(request: TenantIdRequest) {
  return XHR<boolean>({
    url: "/platform/dingTalk/feign/check/dingTalk",
    method: "post",
    data: request,
    mock: "@boolean()",
  });
}

/**
 * 发送钉钉通知
 * @param request request
 */
export function sendNoticeUsingPOST(request: DingTalkSendWorkMsgRequest) {
  return XHR<unknown>({
    url: "/platform/dingTalk/feign/send/notice",
    method: "post",
    data: request,
  });
}

/**
 * 定时Job同步钉钉应用中用户或者组织信息
 * @param req req
 */
export function jobSyncDingTalkDataUsingPOST(req: JobSyncDingTalkDataReq) {
  return XHR<unknown>({
    url: "/platform/dingTalk/jobSyncDingTalkData",
    method: "post",
    data: req,
  });
}

/**
      * 查询钉钉应用信息(根据企业信息查询)

      */
export function queryDingTalkIntegrateUsingPOST() {
  return XHR<QueryDingTalkIntegrateUsingPOSTResult>({
    url: "/platform/dingTalk/queryDingTalk",
    method: "post",
    mock: {
      agentId: "@id()",
      appKey: "@string()",
      appSecret: "@string()",
      id: "@natural()",
      needSyncOrganization: "@boolean()",
    },
  });
}

/**
 * 保存钉钉应用信息
 * @param req req
 */
export function saveDingTalkUsingPOST(req: SaveDingTalkReq) {
  return XHR<unknown>({
    url: "/platform/dingTalk/saveDingTalk",
    method: "post",
    data: req,
  });
}

/**
 * 同步钉钉应用中用户或者组织信息
 * @param req req
 */
export function syncDingTalkDataUsingPOST(req: SyncDingTalkDataReq) {
  return XHR<unknown>({
    url: "/platform/dingTalk/syncDingTalkData",
    method: "post",
    data: req,
  });
}

/**
 * 删除
 * @param req req
 */
export function deleteUsingPOST_1(req: DownLoadRecordIdReq) {
  return XHR<unknown>({
    url: "/platform/downloadCenter/delete",
    method: "post",
    data: req,
  });
}

/**
      * 清空

      */
export function deleteAllUsingPOST() {
  return XHR<unknown>({
    url: "/platform/downloadCenter/deleteAll",
    method: "post",
  });
}

/**
 * 查询下载记录
 * @param req req
 */
export function queryDownLoadRecordUsingPOST(req: DownLoadRecordQueryReq) {
  return XHR<QueryDownLoadRecordUsingPOSTResult>({
    url: "/platform/downloadCenter/query",
    method: "post",
    data: req,
    mock: [
      {
        downLoadRecordDate: "@datetime()",
        "downLoadRecords|10-20": [
          {
            canDownload: "@boolean()",
            downLoadRecordId: "@natural()",
            downloadDate: "@datetime()",
            downloadTime: "@datetime()",
            fileExtension: "@string()",
            fileName: "@name()",
            fileUrl: "@image('200x100','#4A7BF7','fileUrl')",
            recordStatus: "@string()",
            recordStatusText: "@string()",
          },
        ],
      },
    ],
  });
}

/**
 * 同步下载记录
 * @param req req
 */
export function syncRecordUsingPOST(req: DownLoadRecordSyncReq) {
  return XHR<SyncRecordUsingPOSTResult>({
    url: "/platform/downloadCenter/syncRecord",
    method: "post",
    data: req,
    mock: {
      downloadRecordCode: "@string()",
    },
  });
}

/**
 * 新增菜单（包括内置菜单、外部页面）
 * @param req req
 */
export function addUsingPOST_1(req: MenuAddReq) {
  return XHR<AddDepartmentUsingPOSTResult>({
    url: "/platform/menu/add",
    method: "post",
    data: req,
    mock: {
      id: "@natural()",
    },
  });
}

/**
 * 【系统配置-菜单管理】查询所有菜单（根据查询类型判断是否包括按钮以及外部页面，包含禁用的菜单）
 * @param req req
 */
export function allMenuTreeUsingPOST(req: MenuQueryReq) {
  return XHR<AllMenuTreeUsingPOSTResult>({
    url: "/platform/menu/allMenuTree",
    method: "post",
    data: req,
    mock: [
      {
        checked: "@boolean()",
        "children|10-20": [{}],
        defaultMenu: "@string()",
        disabled: "@natural()",
        extendUrl: "@image('200x100','#4A7BF7','extendUrl')",
        "extendUrlParamList|10-20": [
          {
            encrypt: "@string()",
            key: "@string()",
            type: "@string()",
            value: "@string()",
            valueActual: "@string()",
          },
        ],
        interPermission: "@string()",
        menuIcon: "@string()",
        menuId: "@natural()",
        menuName: "@name()",
        menuPermission: "@string()",
        menuProperty: "@string()",
        menuType: "@string()",
        menuUrl: "@image('200x100','#4A7BF7','menuUrl')",
        moduleCode: "@string()",
        moduleId: "@natural()",
        outerOpen: "@string()",
        parentId: "@natural()",
        parentName: "@name()",
        sortNumber: "@natural()",
      },
    ],
  });
}

/**
 * 删除菜单
 * @param req req
 */
export function deleteUsingPOST_2(req: MenuIdReq) {
  return XHR<unknown>({
    url: "/platform/menu/delete",
    method: "post",
    data: req,
  });
}

/**
 * 查询某个菜单的详情
 * @param req req
 */
export function menuDetailUsingPOST(req: MenuIdReq) {
  return XHR<MenuDetailUsingPOSTResult>({
    url: "/platform/menu/detail",
    method: "post",
    data: req,
    mock: {
      checked: "@boolean()",
      "children|10-20": [{}],
      defaultMenu: "@string()",
      disabled: "@natural()",
      extendUrl: "@image('200x100','#4A7BF7','extendUrl')",
      "extendUrlParamList|10-20": [
        {
          encrypt: "@string()",
          key: "@string()",
          type: "@string()",
          value: "@string()",
          valueActual: "@string()",
        },
      ],
      interPermission: "@string()",
      menuIcon: "@string()",
      menuId: "@natural()",
      menuName: "@name()",
      menuPermission: "@string()",
      menuProperty: "@string()",
      menuType: "@string()",
      menuUrl: "@image('200x100','#4A7BF7','menuUrl')",
      moduleCode: "@string()",
      moduleId: "@natural()",
      outerOpen: "@string()",
      parentId: "@natural()",
      parentName: "@name()",
      sortNumber: "@natural()",
    },
  });
}

/**
 * 禁用/启用 菜单
 * @param req req
 */
export function menuStatusUpdateUsingPOST(req: MenuStatusUpdateReq) {
  return XHR<unknown>({
    url: "/platform/menu/status/update",
    method: "post",
    data: req,
  });
}

/**
 * 【租户管理-租户权限分配】查询模块下的所有菜单，该租户拥有的菜单选中
 * @param req req
 */
export function tenantMenuTreeUsingPOST(req: TenantMenuQueryReq) {
  return XHR<AllMenuTreeUsingPOSTResult>({
    url: "/platform/menu/tenantMenuTree",
    method: "post",
    data: req,
    mock: [
      {
        checked: "@boolean()",
        "children|10-20": [{}],
        defaultMenu: "@string()",
        disabled: "@natural()",
        extendUrl: "@image('200x100','#4A7BF7','extendUrl')",
        "extendUrlParamList|10-20": [
          {
            encrypt: "@string()",
            key: "@string()",
            type: "@string()",
            value: "@string()",
            valueActual: "@string()",
          },
        ],
        interPermission: "@string()",
        menuIcon: "@string()",
        menuId: "@natural()",
        menuName: "@name()",
        menuPermission: "@string()",
        menuProperty: "@string()",
        menuType: "@string()",
        menuUrl: "@image('200x100','#4A7BF7','menuUrl')",
        moduleCode: "@string()",
        moduleId: "@natural()",
        outerOpen: "@string()",
        parentId: "@natural()",
        parentName: "@name()",
        sortNumber: "@natural()",
      },
    ],
  });
}

/**
 * 【角色管理-分配权限】查询租户下主管理员所拥有菜单，选中角色有权限的菜单（不包含禁用的菜单）
 * @param request request
 */
export function roleMenuTreeUsingPOST(request: RoleIdReq) {
  return XHR<AllMenuTreeUsingPOSTResult>({
    url: "/platform/menu/tree",
    method: "post",
    data: request,
    mock: [
      {
        checked: "@boolean()",
        "children|10-20": [{}],
        defaultMenu: "@string()",
        disabled: "@natural()",
        extendUrl: "@image('200x100','#4A7BF7','extendUrl')",
        "extendUrlParamList|10-20": [
          {
            encrypt: "@string()",
            key: "@string()",
            type: "@string()",
            value: "@string()",
            valueActual: "@string()",
          },
        ],
        interPermission: "@string()",
        menuIcon: "@string()",
        menuId: "@natural()",
        menuName: "@name()",
        menuPermission: "@string()",
        menuProperty: "@string()",
        menuType: "@string()",
        menuUrl: "@image('200x100','#4A7BF7','menuUrl')",
        moduleCode: "@string()",
        moduleId: "@natural()",
        outerOpen: "@string()",
        parentId: "@natural()",
        parentName: "@name()",
        sortNumber: "@natural()",
      },
    ],
  });
}

/**
 * 菜单编辑
 * @param req req
 */
export function updateUsingPOST_1(req: MenuUpdateReq) {
  return XHR<unknown>({
    url: "/platform/menu/update",
    method: "post",
    data: req,
  });
}

/**
 * 【登录菜单，当前用户登录】查询当前用户菜单(不包含禁用的菜单)
 * @param req req
 */
export function userMenuTreeUsingPOST(req: LoginMenuQueryReq) {
  return XHR<AllMenuTreeUsingPOSTResult>({
    url: "/platform/menu/userMenuTree",
    method: "post",
    data: req,
    mock: [
      {
        checked: "@boolean()",
        "children|10-20": [{}],
        defaultMenu: "@string()",
        disabled: "@natural()",
        extendUrl: "@image('200x100','#4A7BF7','extendUrl')",
        "extendUrlParamList|10-20": [
          {
            encrypt: "@string()",
            key: "@string()",
            type: "@string()",
            value: "@string()",
            valueActual: "@string()",
          },
        ],
        interPermission: "@string()",
        menuIcon: "@string()",
        menuId: "@natural()",
        menuName: "@name()",
        menuPermission: "@string()",
        menuProperty: "@string()",
        menuType: "@string()",
        menuUrl: "@image('200x100','#4A7BF7','menuUrl')",
        moduleCode: "@string()",
        moduleId: "@natural()",
        outerOpen: "@string()",
        parentId: "@natural()",
        parentName: "@name()",
        sortNumber: "@natural()",
      },
    ],
  });
}

/**
 * 消息提醒-自己定义内容
 * @param req req
 */
export function sendMessageNoticeUsingPOST(req: SendMessageNoticeRequest) {
  return XHR<unknown>({
    url: "/platform/messageNotice/feign/sendMessageNotice",
    method: "post",
    data: req,
  });
}

/**
 * 消息提醒-自己定义内容(异步)
 * @param req req
 */
export function sendMessageNoticeAsyncUsingPOST(req: SendMessageNoticeRequest) {
  return XHR<unknown>({
    url: "/platform/messageNotice/feign/sendMessageNoticeAsync",
    method: "post",
    data: req,
  });
}

/**
 * 消息提醒-纯文本内容
 * @param req req
 */
export function sendMessageNoticeTextUsingPOST(
  req: SendMessageNoticeTextRequest
) {
  return XHR<unknown>({
    url: "/platform/messageNotice/feign/sendMessageNoticeText",
    method: "post",
    data: req,
  });
}

/**
 * 消息提醒-纯文本内容(异步)
 * @param req req
 */
export function sendMessageNoticeTextAsyncUsingPOST(
  req: SendMessageNoticeTextRequest
) {
  return XHR<unknown>({
    url: "/platform/messageNotice/feign/sendMessageNoticeTextAsync",
    method: "post",
    data: req,
  });
}

/**
 * 全部置为已读-状态变更
 * @param request request
 */
export function messageNoticeAllSetReadUsingPOST(
  request: MessageNoticeSetAllReadReq
) {
  return XHR<MessageNoticeAllSetReadUsingPOSTResult>({
    url: "/platform/messageNotice/messageNoticeAllSetRead",
    method: "post",
    data: request,
    mock: {},
  });
}

/**
 * 消息中心,分页查询数据
 * @param request request
 */
export function messageNoticePageUsingPOST(request: MessageNoticePageReq) {
  return XHR<MessageNoticePageUsingPOSTResult>({
    url: "/platform/messageNotice/messageNoticePage",
    method: "post",
    data: request,
    mock: {
      "list|10-20": [
        {
          appMenuUrl: "@image('200x100','#4A7BF7','appMenuUrl')",
          businessType: "@string()",
          businessTypeIcon: "@string()",
          businessTypeText: "@string()",
          clickType: "@string()",
          externalLinkUrl: "@image('200x100','#4A7BF7','externalLinkUrl')",
          isRead: "@natural()",
          menuUrlParam: "@image('200x100','#4A7BF7','menuUrlParam')",
          messageContent: "@sentence()",
          messageNoticeReceiverId: "@id()",
          readTime: "@datetime()",
          sendTime: "@datetime()",
          webMenuUrl: "@image('200x100','#4A7BF7','webMenuUrl')",
        },
      ],
      total: "@natural()",
    },
  });
}

/**
 * 消息设置已读-状态变更
 * @param request request
 */
export function messageNoticeSetReadUsingPOST(
  request: MessageNoticeSetReadReq
) {
  return XHR<MessageNoticeAllSetReadUsingPOSTResult>({
    url: "/platform/messageNotice/messageNoticeSetRead",
    method: "post",
    data: request,
    mock: {},
  });
}

/**
 * 消息中心,数据统计
 * @param request request
 */
export function messageNoticeStatisticalUsingPOST(
  request: MessageNoticeStatisticalReq
) {
  return XHR<MessageNoticeStatisticalUsingPOSTResult>({
    url: "/platform/messageNotice/messageNoticeStatistical",
    method: "post",
    data: request,
    mock: {
      "businessTypes|10-20": [
        {
          businessType: "@string()",
          businessTypeIcon: "@string()",
          businessTypeText: "@string()",
          isReadTotal: "@natural()",
          notReadTotal: "@natural()",
        },
      ],
      isReadTotal: "@natural()",
      messageTotal: "@natural()",
      notReadTotal: "@natural()",
    },
  });
}

/**
 * 发送WebSocket消息
 * @param request request
 */
export function sendWebSocketUsingPOST(request: MessageNoticeSendReq) {
  return XHR<unknown>({
    url: "/platform/messageNotice/webSocket/send",
    method: "post",
    data: request,
  });
}

/**
 * 模块新增
 * @param req req
 */
export function addUsingPOST_2(req: ModuleAddReq) {
  return XHR<AddDepartmentUsingPOSTResult>({
    url: "/platform/module/add",
    method: "post",
    data: req,
    mock: {
      id: "@natural()",
    },
  });
}

/**
 * 删除模块
 * @param req req
 */
export function deleteUsingPOST_3(req: ModuleBase) {
  return XHR<unknown>({
    url: "/platform/module/delete",
    method: "post",
    data: req,
  });
}

/**
 * 模块详情
 * @param req req
 */
export function detailUsingPOST_4(req: ModuleBase) {
  return XHR<DetailUsingPOST_4Result>({
    url: "/platform/module/detail",
    method: "post",
    data: req,
    mock: {
      createUserId: "@natural()",
      createUserName: "@name()",
      description: "@string()",
      disabled: "@natural()",
      moduleCode: "@string()",
      moduleId: "@natural()",
      moduleName: "@name()",
      rowUpdateTime: "@datetime()",
      sortNumber: "@natural()",
    },
  });
}

/**
 * 查询模块（不分页）
 * @param req req
 */
export function listUsingPOST_6(req: ModuleQueryReq) {
  return XHR<ListUsingPOST_6Result>({
    url: "/platform/module/list",
    method: "post",
    data: req,
    mock: [
      {
        createUserId: "@natural()",
        createUserName: "@name()",
        description: "@string()",
        disabled: "@natural()",
        moduleCode: "@string()",
        moduleId: "@natural()",
        moduleName: "@name()",
        rowUpdateTime: "@datetime()",
        sortNumber: "@natural()",
      },
    ],
  });
}

/**
      * 查询模块集合（当前用户）

      */
export function listByUserUsingPOST() {
  return XHR<ListUsingPOST_6Result>({
    url: "/platform/module/listByUser",
    method: "post",
    mock: [
      {
        createUserId: "@natural()",
        createUserName: "@name()",
        description: "@string()",
        disabled: "@natural()",
        moduleCode: "@string()",
        moduleId: "@natural()",
        moduleName: "@name()",
        rowUpdateTime: "@datetime()",
        sortNumber: "@natural()",
      },
    ],
  });
}

/**
 * 查询模块（分页）
 * @param req req
 */
export function pageUsingPOST_1(req: ModuleQueryReq) {
  return XHR<PageUsingPOST_1Result>({
    url: "/platform/module/page",
    method: "post",
    data: req,
    mock: {
      "list|10-20": [
        {
          createUserId: "@natural()",
          createUserName: "@name()",
          description: "@string()",
          disabled: "@natural()",
          moduleCode: "@string()",
          moduleId: "@natural()",
          moduleName: "@name()",
          rowUpdateTime: "@datetime()",
          sortNumber: "@natural()",
        },
      ],
      total: "@natural()",
    },
  });
}

/**
 * 禁用/启用 模块
 * @param req req
 */
export function moduleStatusUpdateUsingPOST(req: ModuleStatusUpdateReq) {
  return XHR<unknown>({
    url: "/platform/module/status/update",
    method: "post",
    data: req,
  });
}

/**
 * 模块编辑
 * @param req req
 */
export function updateUsingPOST_2(req: ModuleUpdateReq) {
  return XHR<unknown>({
    url: "/platform/module/update",
    method: "post",
    data: req,
  });
}

/**
 * 新增角色
 * @param request request
 */
export function addUsingPOST_3(request: RoleAddReq) {
  return XHR<AddDepartmentUsingPOSTResult>({
    url: "/platform/role/add",
    method: "post",
    data: request,
    mock: {
      id: "@natural()",
    },
  });
}

/**
 * 角色绑定用户
 * @param request request
 */
export function addUserUsingPOST(request: RoleBindUserReq) {
  return XHR<unknown>({
    url: "/platform/role/addUser",
    method: "post",
    data: request,
  });
}

/**
 * 角色权限菜单分配（全量）
 * @param request request
 */
export function assignMenu2roleUsingPOST(request: RoleAssignMenuReq) {
  return XHR<unknown>({
    url: "/platform/role/assignMenu2role",
    method: "post",
    data: request,
  });
}

/**
 * 删除角色
 * @param request request
 */
export function deleteUsingPOST_4(request: RoleIdReq) {
  return XHR<unknown>({
    url: "/platform/role/delete",
    method: "post",
    data: request,
  });
}

/**
 * 角色取消绑定用户
 * @param request request
 */
export function deleteUserUsingPOST(request: RoleBindUserReq) {
  return XHR<unknown>({
    url: "/platform/role/deleteUser",
    method: "post",
    data: request,
  });
}

/**
 * 角色详情
 * @param req req
 */
export function detailUsingPOST_5(req: RoleIdReq) {
  return XHR<DetailUsingPOST_5Result>({
    url: "/platform/role/detail",
    method: "post",
    data: req,
    mock: {
      roleId: "@natural()",
      roleName: "@name()",
    },
  });
}

/**
 * 根据用户id获取所有角色
 * @param request request
 */
export function getRoleInfoByUserIdUsingPOST(request: UserDetailRequest) {
  return XHR<GetRoleInfoByUserIdUsingPOSTResult>({
    url: "/platform/role/feign/getRolesByUserId",
    method: "post",
    data: request,
    mock: [
      {
        roleId: "@natural()",
        roleName: "@name()",
      },
    ],
  });
}

/**
 * 新增固定角色
 * @param req req
 */
export function addFixedRoleUsingPOST(req: FixedRoleAddReq) {
  return XHR<unknown>({
    url: "/platform/role/fixedRole/add",
    method: "post",
    data: req,
  });
}

/**
 * 固定角色删除
 * @param req req
 */
export function deleteFixedRoleUsingPOST(req: RoleIdReq) {
  return XHR<unknown>({
    url: "/platform/role/fixedRole/delete",
    method: "post",
    data: req,
  });
}

/**
 * 固定角色列表（分页）
 * @param req req
 */
export function fixedRolePageUsingPOST(req: FixedRoleQueryReq) {
  return XHR<FixedRolePageUsingPOSTResult>({
    url: "/platform/role/fixedRole/page",
    method: "post",
    data: req,
    mock: {
      "list|10-20": [
        {
          businessType: "@string()",
          createTime: "@datetime()",
          roleId: "@natural()",
          roleName: "@name()",
        },
      ],
      total: "@natural()",
    },
  });
}

/**
 * 新增内置角色
 * @param req req
 */
export function addInlayRoleUsingPOST(req: InlayRoleAddReq) {
  return XHR<AddDepartmentUsingPOSTResult>({
    url: "/platform/role/inlayRole/add",
    method: "post",
    data: req,
    mock: {
      id: "@natural()",
    },
  });
}

/**
 * 内置角色删除
 * @param req req
 */
export function deleteInlayRoleUsingPOST(req: RoleIdReq) {
  return XHR<unknown>({
    url: "/platform/role/inlayRole/delete",
    method: "post",
    data: req,
  });
}

/**
 * 内置角色详情
 * @param req req
 */
export function inlayRoleDetailUsingPOST(req: RoleIdReq) {
  return XHR<InlayRoleDetailUsingPOSTResult>({
    url: "/platform/role/inlayRole/detail",
    method: "post",
    data: req,
    mock: {
      operatorName: "@name()",
      roleCode: "@string()",
      roleId: "@natural()",
      roleName: "@name()",
      updateTime: "@datetime()",
    },
  });
}

/**
 * 查询内置角色列表（不分页）
 * @param req req
 */
export function inlayRoleListUsingPOST(req: InlayRoleQueryReq) {
  return XHR<InlayRoleListUsingPOSTResult>({
    url: "/platform/role/inlayRole/list",
    method: "post",
    data: req,
    mock: [
      {
        operatorName: "@name()",
        roleCode: "@string()",
        roleId: "@natural()",
        roleName: "@name()",
        updateTime: "@datetime()",
      },
    ],
  });
}

/**
 * 查询内置角色列表（分页）
 * @param req req
 */
export function inlayRolePageUsingPOST(req: InlayRoleQueryReq) {
  return XHR<InlayRolePageUsingPOSTResult>({
    url: "/platform/role/inlayRole/page",
    method: "post",
    data: req,
    mock: {
      "list|10-20": [
        {
          operatorName: "@name()",
          roleCode: "@string()",
          roleId: "@natural()",
          roleName: "@name()",
          updateTime: "@datetime()",
        },
      ],
      total: "@natural()",
    },
  });
}

/**
 * 内置角色编辑
 * @param req req
 */
export function updateInlayRoleUsingPOST(req: InlayRoleUpdateReq) {
  return XHR<unknown>({
    url: "/platform/role/inlayRole/update",
    method: "post",
    data: req,
  });
}

/**
 * 查询角色列表（不分页）
 * @param request request
 */
export function listUsingPOST_7(request: RoleListReq) {
  return XHR<GetRoleInfoByUserIdUsingPOSTResult>({
    url: "/platform/role/list",
    method: "post",
    data: request,
    mock: [
      {
        roleId: "@natural()",
        roleName: "@name()",
      },
    ],
  });
}

/**
 * 查询所有角色，并区分出哪些角色已分配给用户
 * @param request request
 */
export function listByUserIdUsingPOST(request: RoleListByUserReq) {
  return XHR<ListByUserIdUsingPOSTResult>({
    url: "/platform/role/listByUserId",
    method: "post",
    data: request,
    mock: [
      {
        assignFlag: "@boolean()",
        roleCode: "@string()",
        roleId: "@natural()",
        roleName: "@name()",
        roleType: "@natural()",
        sortNumber: "@natural()",
      },
    ],
  });
}

/**
 * 查询角色列表（分页）
 * @param request request
 */
export function pageUsingPOST_2(request: RolePageReq) {
  return XHR<PageUsingPOST_2Result>({
    url: "/platform/role/page",
    method: "post",
    data: request,
    mock: {
      "list|10-20": [
        {
          roleId: "@natural()",
          roleName: "@name()",
        },
      ],
      total: "@natural()",
    },
  });
}

/**
 * 角色编辑
 * @param request request
 */
export function updateUsingPOST_3(request: RoleUpdateReq) {
  return XHR<unknown>({
    url: "/platform/role/update",
    method: "post",
    data: request,
  });
}

/**
 * 新增数据权限
 * @param request request
 */
export function addUsingPOST_4(request: RoleDataPermissionAddReq) {
  return XHR<AddUsingPOST_4Result>({
    url: "/platform/roleDataPermission/add",
    method: "post",
    data: request,
    mock: {
      authorityTargetId: "@natural()",
      authorityTargetName: "@name()",
      authorityTargetType: "@string()",
      authorityTargetTypeText: "@string()",
      dataModule: "@string()",
      dataModuleName: "@name()",
      departmentId: "@natural()",
      departmentName: "@name()",
      permissionRange: "@string()",
      permissionRangeText: "@string()",
      roleDataPermissionId: "@natural()",
    },
  });
}

/**
 * 删除数据权限
 * @param request request
 */
export function deleteUsingPOST_5(request: RoleDataPermissionDeleteReq) {
  return XHR<MessageNoticeAllSetReadUsingPOSTResult>({
    url: "/platform/roleDataPermission/delete",
    method: "post",
    data: request,
    mock: {},
  });
}

/**
 * 数据权限详情
 * @param request request
 */
export function detailUsingPOST_6(request: RoleDataPermissionIdReq) {
  return XHR<AddUsingPOST_4Result>({
    url: "/platform/roleDataPermission/detail",
    method: "post",
    data: request,
    mock: {
      authorityTargetId: "@natural()",
      authorityTargetName: "@name()",
      authorityTargetType: "@string()",
      authorityTargetTypeText: "@string()",
      dataModule: "@string()",
      dataModuleName: "@name()",
      departmentId: "@natural()",
      departmentName: "@name()",
      permissionRange: "@string()",
      permissionRangeText: "@string()",
      roleDataPermissionId: "@natural()",
    },
  });
}

/**
 * 查询数据权限列表（分页）
 * @param request request
 */
export function pageUsingPOST_3(request: RoleDataPermissionPageReq) {
  return XHR<PageUsingPOST_3Result>({
    url: "/platform/roleDataPermission/page",
    method: "post",
    data: request,
    mock: {
      "list|10-20": [
        {
          authorityTargetId: "@natural()",
          authorityTargetName: "@name()",
          authorityTargetType: "@string()",
          authorityTargetTypeText: "@string()",
          dataModule: "@string()",
          dataModuleName: "@name()",
          departmentId: "@natural()",
          departmentName: "@name()",
          permissionRange: "@string()",
          permissionRangeText: "@string()",
          roleDataPermissionId: "@natural()",
        },
      ],
      total: "@natural()",
    },
  });
}

/**
 * 修改数据权限
 * @param request request
 */
export function updateUsingPOST_4(request: RoleDataPermissionUpdateReq) {
  return XHR<AddUsingPOST_4Result>({
    url: "/platform/roleDataPermission/update",
    method: "post",
    data: request,
    mock: {
      authorityTargetId: "@natural()",
      authorityTargetName: "@name()",
      authorityTargetType: "@string()",
      authorityTargetTypeText: "@string()",
      dataModule: "@string()",
      dataModuleName: "@name()",
      departmentId: "@natural()",
      departmentName: "@name()",
      permissionRange: "@string()",
      permissionRangeText: "@string()",
      roleDataPermissionId: "@natural()",
    },
  });
}

/**
 * 切换租户
 * @param req req
 */
export function changeTenantUsingPOST(req: TenantIdReq) {
  return XHR<ChangeTenantUsingPOSTResult>({
    url: "/platform/system/change/tenant",
    method: "post",
    data: req,
    mock: {
      companyName: "@name()",
      companySimpleName: "@name()",
      departmentName: "@name()",
      firstLogin: "@boolean()",
      loginDate: "@datetime()",
      mobile: "@string()",
      onlyOneTenant: "@boolean()",
      tenantLogoUrl: "@image('200x100','#4A7BF7','tenantLogoUrl')",
      tipChangePassword: "@boolean()",
      token: "@string()",
      userAccount: "@string()",
      userId: "@natural()",
      userName: "@name()",
    },
  });
}

/**
 * 根据token获取用户信息
 * @param request request
 */
export function authTokenUsingPOST(request: TokenAuthRequest) {
  return XHR<AuthTokenUsingPOSTResult>({
    url: "/platform/system/feign/authToken",
    method: "post",
    data: request,
    mock: {
      accountId: "@natural()",
      companyName: "@name()",
      delegateUser: "@boolean()",
      "deptNames|10-20": ["@name()"],
      licenseCode: "@string()",
      loginSrc: "@string()",
      masterAdmin: "@boolean()",
      mobile: "@string()",
      "roleNames|10-20": ["@name()"],
      tenantId: "@natural()",
      token: "@string()",
      userAccount: "@string()",
      userId: "@natural()",
      userName: "@name()",
    },
  });
}

/**
 * 获取租户的管理员token信息
 * @param request request
 */
export function getUserInfoByTenantIdUsingPOST(request: TenantIdRequest) {
  return XHR<AuthTokenUsingPOSTResult>({
    url: "/platform/system/feign/getUserInfoByTenantId",
    method: "post",
    data: request,
    mock: {
      accountId: "@natural()",
      companyName: "@name()",
      delegateUser: "@boolean()",
      "deptNames|10-20": ["@name()"],
      licenseCode: "@string()",
      loginSrc: "@string()",
      masterAdmin: "@boolean()",
      mobile: "@string()",
      "roleNames|10-20": ["@name()"],
      tenantId: "@natural()",
      token: "@string()",
      userAccount: "@string()",
      userId: "@natural()",
      userName: "@name()",
    },
  });
}

/**
 * 根据用户信息获取用户权限列表
 * @param request request
 */
export function getUserPermissionsUsingPOST(request: UserIdRequest) {
  return XHR<string[]>({
    url: "/platform/system/feign/getUserPermissions",
    method: "post",
    data: request,
    mock: ["@string()"],
  });
}

/**
 * 踢指定登录渠道的用户下线
 * @param req req
 */
export function kickLoginUserUsingPOST_1(req: KickLoginUserRequest) {
  return XHR<unknown>({
    url: "/platform/system/feign/kickLoginUser",
    method: "post",
    data: req,
  });
}

/**
 * 忘记密码-修改密码
 * @param request request
 */
export function forgetPwdModifyPasswordUsingPOST(
  request: ForgetPwdModifyPwdReq
) {
  return XHR<unknown>({
    url: "/platform/system/forgetPwd/modifyPwd",
    method: "post",
    data: request,
  });
}

/**
 * 忘记密码-发送短信验证码
 * @param request request
 */
export function forgetPwdSendSmsUsingPOST(request: ForgetPwdSendSmsReq) {
  return XHR<unknown>({
    url: "/platform/system/forgetPwd/sendSms",
    method: "post",
    data: request,
  });
}

/**
 * 忘记密码-校验短信验证码
 * @param request request
 */
export function forgetPwdValidateSmsUsingPOST(
  request: ForgetPwdValidateSmsReq
) {
  return XHR<unknown>({
    url: "/platform/system/forgetPwd/validateSms",
    method: "post",
    data: request,
  });
}

/**
      * 前端模块定义

      */
export function frontModuleDefineUsingGET() {
  return XHR<FrontModuleDefineUsingGETResult>({
    url: "/platform/system/frontModuleDefine",
    method: "get",
    mock: [
      {
        moduleName: "@name()",
        realmName: "@name()",
      },
    ],
  });
} /**
      * 前端模块定义

      */
export function frontModuleDefineUsingPOST() {
  return XHR<FrontModuleDefineUsingGETResult>({
    url: "/platform/system/frontModuleDefine",
    method: "post",
    mock: [
      {
        moduleName: "@name()",
        realmName: "@name()",
      },
    ],
  });
}

/**
 * 踢指定登录渠道的用户下线
 * @param req req
 */
export function kickLoginUserUsingGET(req: KickUserReq) {
  return XHR<unknown>({
    url: "/platform/system/kickLoginUser",
    method: "get",
    data: req,
  });
}
/**
 * 踢指定登录渠道的用户下线
 * @param req req
 */
export function kickLoginUserUsingPOST(req: KickUserReq) {
  return XHR<unknown>({
    url: "/platform/system/kickLoginUser",
    method: "post",
    data: req,
  });
}

/**
 * 密码登录
 * @param request request
 */
export function loginUsingPOST(request: LoginReq) {
  return XHR<ChangeTenantUsingPOSTResult>({
    url: "/platform/system/login",
    method: "post",
    data: request,
    mock: {
      companyName: "@name()",
      companySimpleName: "@name()",
      departmentName: "@name()",
      firstLogin: "@boolean()",
      loginDate: "@datetime()",
      mobile: "@string()",
      onlyOneTenant: "@boolean()",
      tenantLogoUrl: "@image('200x100','#4A7BF7','tenantLogoUrl')",
      tipChangePassword: "@boolean()",
      token: "@string()",
      userAccount: "@string()",
      userId: "@natural()",
      userName: "@name()",
    },
  });
}

/**
 * 模拟租户登录
 * @param request request
 */
export function loginMockTenantAdminUsingPOST(request: MockTenantLoginReq) {
  return XHR<ChangeTenantUsingPOSTResult>({
    url: "/platform/system/login/mockTenant",
    method: "post",
    data: request,
    mock: {
      companyName: "@name()",
      companySimpleName: "@name()",
      departmentName: "@name()",
      firstLogin: "@boolean()",
      loginDate: "@datetime()",
      mobile: "@string()",
      onlyOneTenant: "@boolean()",
      tenantLogoUrl: "@image('200x100','#4A7BF7','tenantLogoUrl')",
      tipChangePassword: "@boolean()",
      token: "@string()",
      userAccount: "@string()",
      userId: "@natural()",
      userName: "@name()",
    },
  });
}

/**
 * 短信登录-获取验证码
 * @param request request
 */
export function loginBySendSmsUsingPOST(request: LoginBySendSmsReq) {
  return XHR<unknown>({
    url: "/platform/system/loginBySms/sendSms",
    method: "post",
    data: request,
  });
}

/**
 * 短信登录-校验短信验证码，并且登录
 * @param request request
 */
export function loginByValidateSmsUsingPOST(request: LoginByValidateSmsReq) {
  return XHR<ChangeTenantUsingPOSTResult>({
    url: "/platform/system/loginBySms/validateSms",
    method: "post",
    data: request,
    mock: {
      companyName: "@name()",
      companySimpleName: "@name()",
      departmentName: "@name()",
      firstLogin: "@boolean()",
      loginDate: "@datetime()",
      mobile: "@string()",
      onlyOneTenant: "@boolean()",
      tenantLogoUrl: "@image('200x100','#4A7BF7','tenantLogoUrl')",
      tipChangePassword: "@boolean()",
      token: "@string()",
      userAccount: "@string()",
      userId: "@natural()",
      userName: "@name()",
    },
  });
}

/**
      * 退出

      */
export function logoutUsingPOST() {
  return XHR<unknown>({
    url: "/platform/system/logout",
    method: "post",
  });
}

/**
 * 修改密码
 * @param request request
 */
export function modifyPwdUsingPOST(request: ModifyPwdReq) {
  return XHR<unknown>({
    url: "/platform/system/modifyPwd",
    method: "post",
    data: request,
  });
}

/**
 * 新增租户
 * @param request request
 */
export function addUsingPOST_5(request: TenantAddReq) {
  return XHR<AddDepartmentUsingPOSTResult>({
    url: "/platform/tenant/add",
    method: "post",
    data: request,
    mock: {
      id: "@natural()",
    },
  });
}

/**
 * 分配权限
 * @param request request
 */
export function assignPermissionsUsingPOST(
  request: TenantAssignPermissionsReq
) {
  return XHR<unknown>({
    url: "/platform/tenant/assignPermissions",
    method: "post",
    data: request,
  });
}

/**
 * 变更管理员
 * @param request request
 */
export function changeAdministratorUsingPOST(
  request: TenantChangeAdministratorReq
) {
  return XHR<unknown>({
    url: "/platform/tenant/changeAdministrator",
    method: "post",
    data: request,
  });
}

/**
 * 详情
 * @param request request
 */
export function detailUsingPOST_7(request: IdReq) {
  return XHR<DetailUsingPOST_7Result>({
    url: "/platform/tenant/detail",
    method: "post",
    data: request,
    mock: {
      canLoginByAdmin: "@boolean()",
      certStatus: "@string()",
      companyName: "@name()",
      companySimpleName: "@name()",
      id: "@natural()",
      isDisabled: "@natural()",
      isDisabledText: "@string()",
      licenseCode: "@string()",
      masterAdminAccount: "@string()",
      masterAdminMobile: "@string()",
      masterAdminName: "@name()",
      tenantAdmin: "@boolean()",
      tenantCode: "@string()",
      tenantLabelText: "@string()",
      "tenantLabels|10-20": ["@string()"],
      tenantLogoUrl: "@image('200x100','#4A7BF7','tenantLogoUrl')",
    },
  });
}

/**
 * 启用/禁用
 * @param request request
 */
export function enableOrDisableUsingPOST(request: EnableOrDisableReq) {
  return XHR<unknown>({
    url: "/platform/tenant/enableOrDisable",
    method: "post",
    data: request,
  });
}

/**
 * 租户详情
 * @param request request
 */
export function detailUsingPOST_10(request: TenantDetailRequest) {
  return XHR<DetailUsingPOST_10Result>({
    url: "/platform/tenant/feign/detail",
    method: "post",
    data: request,
    mock: {
      companyName: "@name()",
      companySimpleName: "@name()",
      createTimeText: "@datetime()",
      isDisabled: "@natural()",
      isDisabledText: "@string()",
      licenseCode: "@string()",
      masterAdminAccount: "@string()",
      masterAdminEmail: "@email()",
      masterAdminId: "@natural()",
      masterAdminMobile: "@string()",
      masterAdminName: "@name()",
      tenantCode: "@string()",
      tenantId: "@natural()",
      tenantLogoUrl: "@image('200x100','#4A7BF7','tenantLogoUrl')",
    },
  });
}

/**
 * 租户列表
 * @param request request
 */
export function listUsingPOST_10(request: TenantListRequest) {
  return XHR<ListUsingPOST_10Result>({
    url: "/platform/tenant/feign/list",
    method: "post",
    data: request,
    mock: [
      {
        companyName: "@name()",
        companySimpleName: "@name()",
        createTimeText: "@datetime()",
        isDisabled: "@natural()",
        isDisabledText: "@string()",
        licenseCode: "@string()",
        masterAdminAccount: "@string()",
        masterAdminEmail: "@email()",
        masterAdminId: "@natural()",
        masterAdminMobile: "@string()",
        masterAdminName: "@name()",
        tenantCode: "@string()",
        tenantId: "@natural()",
        tenantLogoUrl: "@image('200x100','#4A7BF7','tenantLogoUrl')",
      },
    ],
  });
}

/**
 * 租户分页
 * @param request request
 */
export function pageUsingPOST_6(request: TenantListRequest) {
  return XHR<PageUsingPOST_6Result>({
    url: "/platform/tenant/feign/page",
    method: "post",
    data: request,
    mock: {
      "list|10-20": [
        {
          companyName: "@name()",
          companySimpleName: "@name()",
          createTimeText: "@datetime()",
          isDisabled: "@natural()",
          isDisabledText: "@string()",
          licenseCode: "@string()",
          masterAdminAccount: "@string()",
          masterAdminEmail: "@email()",
          masterAdminId: "@natural()",
          masterAdminMobile: "@string()",
          masterAdminName: "@name()",
          tenantCode: "@string()",
          tenantId: "@natural()",
          tenantLogoUrl: "@image('200x100','#4A7BF7','tenantLogoUrl')",
        },
      ],
      total: "@natural()",
    },
  });
}

/**
 * 根据租户标签查询-租户列表(分页)
 * @param request request
 */
export function pageByTenantLabelUsingPOST(request: UserTenantRequest) {
  return XHR<PageByTenantLabelUsingPOSTResult>({
    url: "/platform/tenant/feign/pageByTenantLabel",
    method: "post",
    data: request,
    mock: {
      "list|10-20": [
        {
          companyName: "@name()",
          mobile: "@string()",
          tenantId: "@natural()",
          userId: "@natural()",
          userName: "@name()",
        },
      ],
      total: "@natural()",
    },
  });
}

/**
 * 列表（不分页）
 * @param request request
 */
export function listUsingPOST_8(request: TenantListReq) {
  return XHR<ListUsingPOST_8Result>({
    url: "/platform/tenant/list",
    method: "post",
    data: request,
    mock: [
      {
        canLoginByAdmin: "@boolean()",
        certStatus: "@string()",
        companyName: "@name()",
        companySimpleName: "@name()",
        id: "@natural()",
        isDisabled: "@natural()",
        isDisabledText: "@string()",
        licenseCode: "@string()",
        masterAdminAccount: "@string()",
        masterAdminMobile: "@string()",
        masterAdminName: "@name()",
        tenantAdmin: "@boolean()",
        tenantCode: "@string()",
        tenantLabelText: "@string()",
        "tenantLabels|10-20": ["@string()"],
        tenantLogoUrl: "@image('200x100','#4A7BF7','tenantLogoUrl')",
      },
    ],
  });
}

/**
 * 根据登录账号查询租户列表
 * @param request request
 */
export function listTenantByUserAccountUsingPOST(
  request: TenantListByUserAccountReq
) {
  return XHR<ListTenantByUserAccountUsingPOSTResult>({
    url: "/platform/tenant/listByUserAccount",
    method: "post",
    data: request,
    mock: [
      {
        companyName: "@name()",
        companySimpleName: "@name()",
        departmentName: "@name()",
        licenseCode: "@string()",
        tenantId: "@natural()",
        tenantLogoUrl: "@image('200x100','#4A7BF7','tenantLogoUrl')",
      },
    ],
  });
}

/**
 * 列表（分页）
 * @param request request
 */
export function pageUsingPOST_4(request: TenantPageReq) {
  return XHR<PageUsingPOST_4Result>({
    url: "/platform/tenant/page",
    method: "post",
    data: request,
    mock: {
      "list|10-20": [
        {
          canLoginByAdmin: "@boolean()",
          certStatus: "@string()",
          companyName: "@name()",
          companySimpleName: "@name()",
          id: "@natural()",
          isDisabled: "@natural()",
          isDisabledText: "@string()",
          licenseCode: "@string()",
          masterAdminAccount: "@string()",
          masterAdminMobile: "@string()",
          masterAdminName: "@name()",
          tenantAdmin: "@boolean()",
          tenantCode: "@string()",
          tenantLabelText: "@string()",
          "tenantLabels|10-20": ["@string()"],
          tenantLogoUrl: "@image('200x100','#4A7BF7','tenantLogoUrl')",
        },
      ],
      total: "@natural()",
    },
  });
}

/**
 * 新增个人租户
 * @param req req
 */
export function addPersonTenantUsingPOST(req: PersonTenantAddReq) {
  return XHR<AddDepartmentUsingPOSTResult>({
    url: "/platform/tenant/personTenant/add",
    method: "post",
    data: req,
    mock: {
      id: "@natural()",
    },
  });
}

/**
 * 个人租户详情
 * @param req req
 */
export function personTenantDetailUsingPOST(req: IdReq) {
  return XHR<PersonTenantDetailUsingPOSTResult>({
    url: "/platform/tenant/personTenant/detail",
    method: "post",
    data: req,
    mock: {
      tenantAccount: "@string()",
      tenantCode: "@string()",
      tenantMobile: "@string()",
      tenantName: "@name()",
    },
  });
}

/**
 * 个人租户列表（分页）
 * @param req req
 */
export function personTenantPageUsingPOST(req: PersonTenantQueryReq) {
  return XHR<PersonTenantPageUsingPOSTResult>({
    url: "/platform/tenant/personTenant/page",
    method: "post",
    data: req,
    mock: {
      "list|10-20": [
        {
          tenantAccount: "@string()",
          tenantCode: "@string()",
          tenantMobile: "@string()",
          tenantName: "@name()",
        },
      ],
      total: "@natural()",
    },
  });
}

/**
 * 编辑个人租户
 * @param req req
 */
export function updatePersonTenantUsingPOST(req: PersonTenantUpdateReq) {
  return XHR<unknown>({
    url: "/platform/tenant/personTenant/update",
    method: "post",
    data: req,
  });
}

/**
 * 编辑租户
 * @param request request
 */
export function updateUsingPOST_5(request: TenantUpdateReq) {
  return XHR<unknown>({
    url: "/platform/tenant/update",
    method: "post",
    data: request,
  });
}

/**
 * 租户字典-字典新增
 * @param req req
 */
export function addUsingPOST_6(req: TenantDictAddReq) {
  return XHR<unknown>({
    url: "/platform/tenantDict/add",
    method: "post",
    data: req,
  });
}

/**
 * 租户字典-字典删除
 * @param req req
 */
export function deleteUsingPOST_6(req: TenantDictDeleteReq) {
  return XHR<unknown>({
    url: "/platform/tenantDict/delete",
    method: "post",
    data: req,
  });
}

/**
 * 租户字典-字典详情
 * @param req req
 */
export function detailUsingPOST_8(req: TenantDictDeleteReq) {
  return XHR<DetailUsingPOST_2Result>({
    url: "/platform/tenantDict/detail",
    method: "post",
    data: req,
    mock: {
      dictCode: "@string()",
      dictDesc: "@string()",
      "dictDetailList|10-20": [
        {
          optionName: "@name()",
          optionValue: "@string()",
        },
      ],
      dictName: "@name()",
      id: "@id()",
      moduleCode: "@string()",
      moduleId: "@natural()",
      moduleName: "@name()",
    },
  });
}

/**
 * 字典详情
 * @param request request
 */
export function detailUsingPOST_9(request: TenantDictDetailReq) {
  return XHR<DetailUsingPOST_3Result>({
    url: "/platform/tenantDict/feign/detail",
    method: "post",
    data: request,
    mock: {},
  });
}

/**
 * 字典明细详情
 * @param request request
 */
export function dictOptionDetailUsingPOST_1(
  request: TenantDictOptionDetailReq
) {
  return XHR<DictOptionDetailUsingPOSTResult>({
    url: "/platform/tenantDict/feign/dictOptionDetail",
    method: "post",
    data: request,
    mock: {
      label: "@string()",
      value: "@string()",
    },
  });
}

/**
 * 字典列表
 * @param request request
 */
export function listUsingPOST_9(request: TenantDictListReq) {
  return XHR<DetailUsingPOST_3Result>({
    url: "/platform/tenantDict/feign/list",
    method: "post",
    data: request,
    mock: {},
  });
}

/**
 * 租户字典-所有字典
 * @param req req
 */
export function listAllUsingPOST_1(req: TenantDictQueryReq) {
  return XHR<DetailUsingPOST_3Result>({
    url: "/platform/tenantDict/listAll",
    method: "post",
    data: req,
    mock: {},
  });
}

/**
 * 租户字典-字典查询（分页）
 * @param req req
 */
export function pageUsingPOST_5(req: TenantDictQueryReq) {
  return XHR<PageUsingPOSTResult>({
    url: "/platform/tenantDict/page",
    method: "post",
    data: req,
    mock: {
      "list|10-20": [
        {
          dictCode: "@string()",
          dictDesc: "@string()",
          dictName: "@name()",
          id: "@natural()",
          moduleCode: "@string()",
          moduleId: "@natural()",
          moduleName: "@name()",
          options: "@string()",
          rowUpdateTime: "@datetime()",
        },
      ],
      total: "@natural()",
    },
  });
}

/**
 * 租户字典-字典修改
 * @param req req
 */
export function updateUsingPOST_6(req: TenantDictUpdateReq) {
  return XHR<unknown>({
    url: "/platform/tenantDict/update",
    method: "post",
    data: req,
  });
}

/**
      * 查询当前用户的部门列表

      */
export function departmentListByUserUsingPOST() {
  return XHR<SearchDepartmentUsingPOSTResult>({
    url: "/platform/tms/department/listByUser",
    method: "post",
    mock: [
      {
        departmentName: "@name()",
        id: "@natural()",
      },
    ],
  });
}

/**
      * 查询当前用户角色列表（过滤掉拥有用户管理的角色）

      */
export function roleListByUserWithoutUserManagementUsingPOST() {
  return XHR<GetRoleInfoByUserIdUsingPOSTResult>({
    url: "/platform/tms/role/listByUserWithoutUserManagement",
    method: "post",
    mock: [
      {
        roleId: "@natural()",
        roleName: "@name()",
      },
    ],
  });
}

/**
 * 添加用户，并且同时确定部门以及角色
 * @param request request
 */
export function addUserWithDeptAndRoleUsingPOST(
  request: UserWithDeptAndRoleAddReq
) {
  return XHR<AddDepartmentUsingPOSTResult>({
    url: "/platform/tms/user/addUserWithDeptAndRole",
    method: "post",
    data: request,
    mock: {
      id: "@natural()",
    },
  });
}

/**
      * 查询当前登录人的角色是否拥有用户管理权限

      */
export function validateUserRoleIsOwnedUserManagementUsingPOST() {
  return XHR<boolean>({
    url: "/platform/tms/validateUserRoleIsOwnedUserManagement",
    method: "post",
    mock: "@boolean()",
  });
}

/**
 * 添加用户
 * @param request request
 */
export function addUsingPOST_7(request: UserAddReq) {
  return XHR<AddDepartmentUsingPOSTResult>({
    url: "/platform/user/add",
    method: "post",
    data: request,
    mock: {
      id: "@natural()",
    },
  });
}

/**
 * 分配角色(单个分配)
 * @param request request
 */
export function assignRoleUsingPOST(request: UserRoleAssignReq) {
  return XHR<unknown>({
    url: "/platform/user/assignRole",
    method: "post",
    data: request,
  });
}

/**
 * 删除用户
 * @param request request
 */
export function deleteUsingPOST_7(request: IdReq) {
  return XHR<unknown>({
    url: "/platform/user/delete",
    method: "post",
    data: request,
  });
}

/**
 * 用户详情
 * @param request request
 */
export function detailUsingPOST_11(request: UserDetailReq) {
  return XHR<DetailUsingPOST_11Result>({
    url: "/platform/user/detail",
    method: "post",
    data: request,
    mock: {
      currentLoginUser: "@boolean()",
      "departmentIds|10-20": ["@natural()"],
      departmentNames: "@name()",
      "departments|10-20": [
        {
          departmentId: "@natural()",
          departmentName: "@name()",
        },
      ],
      email: "@email()",
      id: "@natural()",
      isDisabled: "@natural()",
      isDisabledText: "@string()",
      lastLoginDate: "@datetime()",
      lastLoginIp: "@string()",
      masterAdmin: "@boolean()",
      mobile: "@string()",
      "roleIds|10-20": ["@natural()"],
      roleNames: "@name()",
      "roles|10-20": [
        {
          roleId: "@natural()",
          roleName: "@name()",
        },
      ],
      sex: "@string()",
      sexText: "@string()",
      tenantId: "@natural()",
      userAccount: "@string()",
      userName: "@name()",
    },
  });
}

/**
 * 启用/禁用
 * @param request request
 */
export function enableOrDisableUsingPOST_1(request: EnableOrDisableReq) {
  return XHR<unknown>({
    url: "/platform/user/enableOrDisable",
    method: "post",
    data: request,
  });
}

/**
 * 批量查询用户详情
 * @param request request
 */
export function batchDetailAndDeptIdsUsingPOST(request: UserQueryRequest) {
  return XHR<BatchDetailAndDeptIdsUsingPOSTResult>({
    url: "/platform/user/feign/batch/detailAndDeptIds",
    method: "post",
    data: request,
    mock: [
      {
        admin: "@boolean()",
        "departments|10-20": [
          {
            departmentFunctions: "@string()",
            departmentHeadId: "@natural()",
            departmentHeadName: "@name()",
            departmentName: "@name()",
            hierarchy: "@natural()",
            id: "@natural()",
            parentId: "@natural()",
            parentIds: "@id()",
            sortNumber: "@natural()",
          },
        ],
        mobile: "@string()",
        userAccount: "@string()",
        userId: "@natural()",
        userName: "@name()",
      },
    ],
  });
}

/**
 * 用户详情
 * @param request request
 */
export function detailUsingPOST_12(request: UserDetailRequest) {
  return XHR<DetailUsingPOST_12Result>({
    url: "/platform/user/feign/detail",
    method: "post",
    data: request,
    mock: {
      email: "@email()",
      id: "@natural()",
      isDisabled: "@natural()",
      isDisabledText: "@string()",
      lastLoginDate: "@datetime()",
      lastLoginIp: "@string()",
      mobile: "@string()",
      sex: "@string()",
      sexText: "@string()",
      tenantId: "@natural()",
      userAccount: "@string()",
      userName: "@name()",
    },
  });
}

/**
 * 查询用户详情
 * @param request request
 */
export function detailAndDeptIdsUsingPOST(request: UserQueryRequest) {
  return XHR<DetailAndDeptIdsUsingPOSTResult>({
    url: "/platform/user/feign/detailAndDeptIds",
    method: "post",
    data: request,
    mock: {
      admin: "@boolean()",
      "departments|10-20": [
        {
          departmentFunctions: "@string()",
          departmentHeadId: "@natural()",
          departmentHeadName: "@name()",
          departmentName: "@name()",
          hierarchy: "@natural()",
          id: "@natural()",
          parentId: "@natural()",
          parentIds: "@id()",
          sortNumber: "@natural()",
        },
      ],
      mobile: "@string()",
      userAccount: "@string()",
      userId: "@natural()",
      userName: "@name()",
    },
  });
}

/**
 * 用户列表
 * @param request request
 */
export function listUsingPOST_12(request: UserListRequest) {
  return XHR<ListUsingPOST_12Result>({
    url: "/platform/user/feign/list",
    method: "post",
    data: request,
    mock: [
      {
        email: "@email()",
        id: "@natural()",
        isDisabled: "@natural()",
        isDisabledText: "@string()",
        lastLoginDate: "@datetime()",
        lastLoginIp: "@string()",
        mobile: "@string()",
        sex: "@string()",
        sexText: "@string()",
        tenantId: "@natural()",
        userAccount: "@string()",
        userName: "@name()",
      },
    ],
  });
}

/**
 * 根据角色查询-用户列表(不分页)
 * @param request request
 */
export function listByRoleUsingPOST(request: UserRoleRequest) {
  return XHR<ListUsingPOST_12Result>({
    url: "/platform/user/feign/listByRole",
    method: "post",
    data: request,
    mock: [
      {
        email: "@email()",
        id: "@natural()",
        isDisabled: "@natural()",
        isDisabledText: "@string()",
        lastLoginDate: "@datetime()",
        lastLoginIp: "@string()",
        mobile: "@string()",
        sex: "@string()",
        sexText: "@string()",
        tenantId: "@natural()",
        userAccount: "@string()",
        userName: "@name()",
      },
    ],
  });
}

/**
 * 根据角色查询-用户列表(分页)
 * @param request request
 */
export function pageByRoleUsingPOST(request: UserRoleRequest) {
  return XHR<PageByRoleUsingPOSTResult>({
    url: "/platform/user/feign/pageByRole",
    method: "post",
    data: request,
    mock: {
      "list|10-20": [
        {
          email: "@email()",
          id: "@natural()",
          isDisabled: "@natural()",
          isDisabledText: "@string()",
          lastLoginDate: "@datetime()",
          lastLoginIp: "@string()",
          mobile: "@string()",
          sex: "@string()",
          sexText: "@string()",
          tenantId: "@natural()",
          userAccount: "@string()",
          userName: "@name()",
        },
      ],
      total: "@natural()",
    },
  });
}

/**
 * 根据租户查询-用户列表(分页)
 * @param request request
 */
export function pageByTenantUsingPOST(request: UserTenantRequest) {
  return XHR<PageByTenantLabelUsingPOSTResult>({
    url: "/platform/user/feign/pageByTenant",
    method: "post",
    data: request,
    mock: {
      "list|10-20": [
        {
          companyName: "@name()",
          mobile: "@string()",
          tenantId: "@natural()",
          userId: "@natural()",
          userName: "@name()",
        },
      ],
      total: "@natural()",
    },
  });
}

/**
 * 查询用户详情
 * @param request request
 */
export function queryDepartmentLeaderUsingPOST(request: UserQueryRequest) {
  return XHR<QueryDepartmentLeaderUsingPOSTResult>({
    url: "/platform/user/feign/queryDepartmentLeader",
    method: "post",
    data: request,
    mock: {
      leaderId: "@natural()",
      "userIds|10-20": ["@natural()"],
    },
  });
}

/**
      * 查询用户id和部门关系(工单预警)

      */
export function queryUserIdAndDeptNameRelationUsingPOST() {
  return XHR<QueryUserIdAndDeptNameRelationUsingPOSTResult>({
    url: "/platform/user/feign/queryUserIdAndDeptNameRelation",
    method: "post",
    mock: {},
  });
}

/**
      * 用户是否拥有密码

      */
export function isContainPwdUsingPOST() {
  return XHR<boolean>({
    url: "/platform/user/isContainPwd",
    method: "post",
    mock: "@boolean()",
  });
}

/**
 * 用户列表（不分页）
 * @param request request
 */
export function listUsingPOST_11(request: UserListReq) {
  return XHR<ListUsingPOST_11Result>({
    url: "/platform/user/list",
    method: "post",
    data: request,
    mock: [
      {
        currentLoginUser: "@boolean()",
        "departmentIds|10-20": ["@natural()"],
        departmentNames: "@name()",
        "departments|10-20": [
          {
            departmentId: "@natural()",
            departmentName: "@name()",
          },
        ],
        email: "@email()",
        id: "@natural()",
        isDisabled: "@natural()",
        isDisabledText: "@string()",
        lastLoginDate: "@datetime()",
        lastLoginIp: "@string()",
        masterAdmin: "@boolean()",
        mobile: "@string()",
        "roleIds|10-20": ["@natural()"],
        roleNames: "@name()",
        "roles|10-20": [
          {
            roleId: "@natural()",
            roleName: "@name()",
          },
        ],
        sex: "@string()",
        sexText: "@string()",
        tenantId: "@natural()",
        userAccount: "@string()",
        userName: "@name()",
      },
    ],
  });
}

/**
 * 用户列表（分页）
 * @param request request
 */
export function pageUsingPOST_7(request: UserPageReq) {
  return XHR<PageUsingPOST_7Result>({
    url: "/platform/user/page",
    method: "post",
    data: request,
    mock: {
      "list|10-20": [
        {
          currentLoginUser: "@boolean()",
          "departmentIds|10-20": ["@natural()"],
          departmentNames: "@name()",
          "departments|10-20": [
            {
              departmentId: "@natural()",
              departmentName: "@name()",
            },
          ],
          email: "@email()",
          id: "@natural()",
          isDisabled: "@natural()",
          isDisabledText: "@string()",
          lastLoginDate: "@datetime()",
          lastLoginIp: "@string()",
          masterAdmin: "@boolean()",
          mobile: "@string()",
          "roleIds|10-20": ["@natural()"],
          roleNames: "@name()",
          "roles|10-20": [
            {
              roleId: "@natural()",
              roleName: "@name()",
            },
          ],
          sex: "@string()",
          sexText: "@string()",
          tenantId: "@natural()",
          userAccount: "@string()",
          userName: "@name()",
        },
      ],
      total: "@natural()",
    },
  });
}

/**
 * 移除角色(单个移除)
 * @param request request
 */
export function removeRoleUsingPOST(request: UserRoleAssignReq) {
  return XHR<unknown>({
    url: "/platform/user/removeRole",
    method: "post",
    data: request,
  });
}

/**
 * 转让主管理员
 * @param request request
 */
export function transferMasterAdminUsingPOST(request: MasterAdminTransferReq) {
  return XHR<unknown>({
    url: "/platform/user/transferMasterAdmin",
    method: "post",
    data: request,
  });
}

/**
 * 编辑用户
 * @param request request
 */
export function updateUsingPOST_7(request: UserUpdateReq) {
  return XHR<unknown>({
    url: "/platform/user/update",
    method: "post",
    data: request,
  });
}

/**
      * 清除所有的Session

      */
export function clearAllSessionUsingGET() {
  return XHR<unknown>({
    url: "/platform/ws/admin/clearAllSession",
    method: "get",
  });
} /**
      * 清除所有的Session

      */
export function clearAllSessionUsingHEAD() {
  return XHR<unknown>({
    url: "/platform/ws/admin/clearAllSession",
    method: "head",
  });
} /**
      * 清除所有的Session

      */
export function clearAllSessionUsingPOST() {
  return XHR<unknown>({
    url: "/platform/ws/admin/clearAllSession",
    method: "post",
  });
} /**
      * 清除所有的Session

      */
export function clearAllSessionUsingPUT() {
  return XHR<unknown>({
    url: "/platform/ws/admin/clearAllSession",
    method: "put",
  });
} /**
      * 清除所有的Session

      */
export function clearAllSessionUsingDELETE() {
  return XHR<unknown>({
    url: "/platform/ws/admin/clearAllSession",
    method: "delete",
  });
} /**
      * 清除所有的Session

      */
export function clearAllSessionUsingOPTIONS() {
  return XHR<unknown>({
    url: "/platform/ws/admin/clearAllSession",
    method: "options",
  });
} /**
      * 清除所有的Session

      */
export function clearAllSessionUsingPATCH() {
  return XHR<unknown>({
    url: "/platform/ws/admin/clearAllSession",
    method: "patch",
  });
}

/**
 * 清除指定用户的Session
 * @param userId userId
 */
export function clearSessionUsingGET(userId: number) {
  return XHR<unknown>({
    url: "/platform/ws/admin/clearSession",
    method: "get",
    params: { userId },
  });
}
/**
 * 清除指定用户的Session
 * @param userId userId
 */
export function clearSessionUsingHEAD(userId: number) {
  return XHR<unknown>({
    url: "/platform/ws/admin/clearSession",
    method: "head",
    params: { userId },
  });
}
/**
 * 清除指定用户的Session
 * @param userId userId
 */
export function clearSessionUsingPOST(userId: number) {
  return XHR<unknown>({
    url: "/platform/ws/admin/clearSession",
    method: "post",
    params: { userId },
  });
}
/**
 * 清除指定用户的Session
 * @param userId userId
 */
export function clearSessionUsingPUT(userId: number) {
  return XHR<unknown>({
    url: "/platform/ws/admin/clearSession",
    method: "put",
    params: { userId },
  });
}
/**
 * 清除指定用户的Session
 * @param userId userId
 */
export function clearSessionUsingDELETE(userId: number) {
  return XHR<unknown>({
    url: "/platform/ws/admin/clearSession",
    method: "delete",
    params: { userId },
  });
}
/**
 * 清除指定用户的Session
 * @param userId userId
 */
export function clearSessionUsingOPTIONS(userId: number) {
  return XHR<unknown>({
    url: "/platform/ws/admin/clearSession",
    method: "options",
    params: { userId },
  });
}
/**
 * 清除指定用户的Session
 * @param userId userId
 */
export function clearSessionUsingPATCH(userId: number) {
  return XHR<unknown>({
    url: "/platform/ws/admin/clearSession",
    method: "patch",
    params: { userId },
  });
}

/**
      * 获取所有Session

      */
export function getAllSessionsUsingGET() {
  return XHR<unknown>({
    url: "/platform/ws/admin/getAllSessions",
    method: "get",
  });
} /**
      * 获取所有Session

      */
export function getAllSessionsUsingHEAD() {
  return XHR<unknown>({
    url: "/platform/ws/admin/getAllSessions",
    method: "head",
  });
} /**
      * 获取所有Session

      */
export function getAllSessionsUsingPOST() {
  return XHR<unknown>({
    url: "/platform/ws/admin/getAllSessions",
    method: "post",
  });
} /**
      * 获取所有Session

      */
export function getAllSessionsUsingPUT() {
  return XHR<unknown>({
    url: "/platform/ws/admin/getAllSessions",
    method: "put",
  });
} /**
      * 获取所有Session

      */
export function getAllSessionsUsingDELETE() {
  return XHR<unknown>({
    url: "/platform/ws/admin/getAllSessions",
    method: "delete",
  });
} /**
      * 获取所有Session

      */
export function getAllSessionsUsingOPTIONS() {
  return XHR<unknown>({
    url: "/platform/ws/admin/getAllSessions",
    method: "options",
  });
} /**
      * 获取所有Session

      */
export function getAllSessionsUsingPATCH() {
  return XHR<unknown>({
    url: "/platform/ws/admin/getAllSessions",
    method: "patch",
  });
}

/**
 * 发送消息
 * @param message message
 * @param userId userId
 */
export function addUsingGET(message: string, userId: number) {
  return XHR<unknown>({
    url: "/platform/ws/admin/sendMsg",
    method: "get",
    params: { message, userId },
  });
}
/**
 * 发送消息
 * @param message message
 * @param userId userId
 */
export function addUsingHEAD(message: string, userId: number) {
  return XHR<unknown>({
    url: "/platform/ws/admin/sendMsg",
    method: "head",
    params: { message, userId },
  });
}
/**
 * 发送消息
 * @param message message
 * @param userId userId
 */
export function addUsingPOST_8(message: string, userId: number) {
  return XHR<unknown>({
    url: "/platform/ws/admin/sendMsg",
    method: "post",
    params: { message, userId },
  });
}
/**
 * 发送消息
 * @param message message
 * @param userId userId
 */
export function addUsingPUT(message: string, userId: number) {
  return XHR<unknown>({
    url: "/platform/ws/admin/sendMsg",
    method: "put",
    params: { message, userId },
  });
}
/**
 * 发送消息
 * @param message message
 * @param userId userId
 */
export function addUsingDELETE(message: string, userId: number) {
  return XHR<unknown>({
    url: "/platform/ws/admin/sendMsg",
    method: "delete",
    params: { message, userId },
  });
}
/**
 * 发送消息
 * @param message message
 * @param userId userId
 */
export function addUsingOPTIONS(message: string, userId: number) {
  return XHR<unknown>({
    url: "/platform/ws/admin/sendMsg",
    method: "options",
    params: { message, userId },
  });
}
/**
 * 发送消息
 * @param message message
 * @param userId userId
 */
export function addUsingPATCH(message: string, userId: number) {
  return XHR<unknown>({
    url: "/platform/ws/admin/sendMsg",
    method: "patch",
    params: { message, userId },
  });
}
