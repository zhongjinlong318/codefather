---
permalink: /
---

# MiraiCRM 用户使用手册

> MiraiCRM 是一个现代化的客户关系管理系统，专注于提供灵活、高效的客户管理解决方案

**补充说明：**<br>
由于 CRM 合同、回款使用到 BPM 的审批功能，所以你需要先看  《工作流》  章节文档，将工作流开启并配置相关合同、回款审批工作流及审批合同回款表单，才能保证 CRM 中审批功能正常使用！<br>

## CRM 管理后台

- 菜单：“CRM 系统”下的「待办事项」「线索管理」「客户管理」「联系人管理」「客户公海」「商机管理」「合同管理」「回款计划」「回款管理」「产品管理」「数据统计」<br>

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/1.png)

- 功能描述

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/93.png)

### 【线索】线索管理

- CRM 线索，是指 CRM 系统中关于公司、个人和商机的原始信息，这些信息主要源自于各种渠道的交流，如活动、电话咨询、广告投放、老客户介绍、或购买来的原始数据等。

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/9.png)

这些线索有可能成为企业的潜在【客户】，当有机会沟通后客户表达出购买【产品】意向，并留下联系方式等信息后，就可以转换为【商机】。

- 线索管理后台-对应 [CRM 系统 -> 线索管理] 菜单

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/2.png)

① 点击【新增】按钮，随便填写一些信息，点击「确认」按钮，即可新增一条线索。如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/3.png)

② 点击“线索名称”，进入线索详情页，可以查看线索的详细信息，如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/4.png)

**详情可以分成 3 个部分：**

- 顶部：线索的基本信息
- 下面：线索的关联信息
- 右上角：线索的操作按钮

**友情提示：客户、联系人、合同等其它模块的详情页，也是类似的结构，都有基本信息、关联信息、操作按钮**<br>
③ 点击【转管】按钮，可以修改线索的负责人，如下图所示

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/5.png)

**友情提示：客户、联系人、合同等其它模块的转移功能，也是类似的操作**<br>
④ 点击【转化为客户】按钮，可以将线索转化为客户。转化后，会创建出一条客户记录，此时会指向客户的编号，如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/6.png)

### 【客户】客户管理、公海客户

- 包含客户信息、客户公海配置、客户现在配置及联系人等功能；

#### 客户

- 客户模块，包括客户管理(我的客户)、公海客户。其中，公海客户是指没有负责人的客户，可以被人分配或者领取成为负责人。
- 对应 [CRM 系统 -> 客户管理] 菜单

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/10.png)

① 　点击【新增】按钮，随便填写一些信息，点击「确认」按钮，即可新增一条客户。如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/11.png)

② 　   点击“客户名称”，进入客户详情页，可以查看客户的详细信息，如下图所示:

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/12.png)

③ 　点击【更改成交状态】按钮，标记客户处理状态为已成交，这样它就不会自动进入公海。

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/13.png)

#### 公海客户

①  点击【放入公海】按钮，即可放入公海。

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/14.png)

放入公海后，可以在 [CRM 系统 -> 公海客户] 菜单中，可以看到该客户。如下图所示:

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/15.png)

② 继续点击该公海客户的“客户名称”，还可以进入客户详情页，如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/16.png)

③ 此时，可以点击【领取】或【分配】按钮，将公海客户分配给自己或者其它人。如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/17.png)

#### 客户限制配置

- 客户限制配置，可以避免一个人拥有太多客户，或者锁定太多客户。
- 限制规则，规则适用人群和部门，可以根据人群和部门来限制客户数量。
- 对应 [CRM 系统 -> 系统配置 -> 客户限制配置] 菜单

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/18.png)
![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/19.png)

#### 客户公海配置

- 客户公海配置

①  启用选项：是否启用客户公海。如果启用，那么超过超期定义天数未跟进的客户，或者超过处理状态天数未成交的客户，就会自动进入公海。<br>
目前，该功能是通过定时任务实现的。你可以参考  《定时任务》  章节文档，自己配置每 5 分钟执行一次。<br>
②  消息提醒选项：是否开启提前提醒。如果开启，那么超过消息提醒天数未跟进的客户，或者超过  notify_day 消息提醒天数未成交的客户，可以在 [CRM 系统 -> 待办事项] 菜单中，看到提醒。如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/20.png)

- 对应 [CRM 系统 -> 系统配置 -> 客户公海配置] 菜单

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/21.png)

#### 联系人

- 联系人模块

①  联系人所属的客户编号，它必须关联到客户表的中客户。<br>
②  联系人的负责人编号，和线索类似。不重复赘述，详细可见  《【通用】数据权限》  文档。<br>
③ 上次联系和下次联系时间信息等：跟进相关，和线索类似。不重复赘述，详细可见  《【通用】跟进记录》  文档。<br>
④ 联系人的基本信息，和客户一致，不重复赘述。

- 对应 [CRM 系统 -> 联系人管理] 菜单

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/22.png)

① 点击【新增】按钮，随便填写一些信息，点击「确认」按钮，即可新增一条联系人。如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/23.png)

② 点击“联系人名称”，进入联系人详情页，可以查看联系人的详细信息，如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/24.png)

联系人一般只有【编辑】、【转移】，所以联系人本质上还是客户的信息补充，即一个客户允许有多个联系人信息。

### 【商机】商机管理、商机状态

- CRM 商机，是指 CRM 系统中可能转化为实际销售的潜在业务机会【商机】，这些机会有可能转化为实际的销售【合同】。

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/25.png)

一个商机，通常需要经过一系列的销售阶段，如挖掘、资格验证、需求分析、价值评估等，最后才能成为一笔实际的交易。

- 商机模块，通常包括两个部分：商机信息、商机状态配置。

#### 商机状态配置

**为什么需要商机状态组表？因为不同的商机，它的状态流程是不一样的。比如**：<br>
状态组 1：“初步接触”、“需求分析”、“方案制定”、“商务谈判”、“合同签订”、“赢单”、“输单”、“无效”等等<br>
状态组 2：“功能演示”、“直接付款”、“赢单”、“输单”、“无效”等等。<br>
当然无论哪种状态组，结束时必然是对应“赢单”、“输单”、“无效”三种状态。<br>
①  名称字段：状态组名字。<br>
②  部门字段：哪些部门可以使用该状态组。如果不设置，默认全公司。

- 对应 [CRM 系统 -> 系统配置 -> 商机状态配置] 菜单

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/26.png)

点击【新增】按钮，可以新增商机状态组，如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/27.png)

#### 商机管理

①  客户字段：客户编号，对应   客户表的客户，必填。<br>
②  负责人字段：商机的负责人编号，和线索类似。不重复赘述，详细可见  《【通用】数据权限》  文档。<br>
③ 跟进状态和下次联系实际字段：跟进相关，和线索类似。不重复赘述，详细可见  《【通用】跟进记录》  文档。<br>
④  状态字段：商机状态类型编号，对应   商机状态表的状态字段定义。当商机结束时，会记录结束状态，最终就是“赢单”、“输单”、“无效”三种。<br>
⑤  产品总价、折扣率、销售总价字段：合同的金额相关，关系是   销售总价 = 产品总价 _ 折扣率。<br>
其中，产品总价是产品表的   产品单价_ 数量   的累加。

- 对应 [CRM 系统 -> 商机管理] 菜单

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/28.png)

① 点击【新增】按钮，随便填写一些信息，点击「确认」按钮，即可新增一条商机。如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/29.png)

② 点击“商机名称”，进入商机详情页，可以查看商机的详细信息，如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/30.png)

③ 点击【变更商机状态】按钮，可以变更商机的状态，如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/31.png)

可以多次变更，直到结束状态有值，即商机结束，即“赢单”、“输单”、“无效”三种。

#### 联系人与商机关联

- 联系人与商机之间，可以进行关联。

① 在联系人详情页，在 [商机] 标签页，可以查看联系人关联的商机，如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/32.png)

- 点击【创建商机】按钮，可以创建一个新的商机，同时关联到当前联系人
- 点击【关联】按钮，可以关联已有的商机到当前联系人。但是要注意，只能关联联系人客户相同的商机

② 在商机详情页，在 [联系人] 标签页，可以查看商机关联的联系人，如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/33.png)

- 点击【创建联系人】按钮，可以创建一个新的联系人，同时关联到当前商机
- 点击【关联】按钮，可以关联已有的联系人到当前商机。但是要注意，只能关联商机客户相同的联系人。

### 【合同】合同管理、合同提醒

合同模块，主要是合同管理及合同提醒两个功能，另外审批功能需要开启 BPM 工作流相关配置和表单定义。

#### 合同管理

①  合同编号：系统自动生成的，目前格式是  {prefix}{yyyyMMdd}{6 位自增}。<br>
②  客户编号：对应客户表的客户编号，必填。<br>
③  商机编号：对应   商机表的编号字段，选填。在选择商机时，会自动带出商机的产品信息，稍后会看到。<br>
④  上次联系信息：跟进相关，和线索类似。不重复赘述，详细可见  《【通用】跟进记录》  文档。<br>
⑤  合同的负责人编号：和线索类似。不重复赘述，详细可见  《【通用】数据权限》  文档。<br>
⑥  工作流编号：用于和  BPM 工作流   打通审批。提交审批后会自动创建一个工作流实例，并记录到该字段。<br>
审批结果：目前有 5 个状态：未提交、审批中、审批通过、审批不通过、已取消。<br>
⑤  产品总价、折扣率、销售总价字段：合同的金额相关，关系是   销售总价 = 产品总价 _ 折扣率。<br>
其中，产品总价是产品表的   产品单价_ 数量   的累加。<br>
⑤ 合同的信息字段。

- 对应 [CRM 系统 -> 合同管理] 菜单

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/34.png)

① 点击【新增】按钮，随便填写一些信息，点击「确认」按钮，即可新增一条合同。如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/35.png)

② 点击【提交审批】按钮，可以提交审批。如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/36.png)
![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/37.png)

提交完成后，会自动创建一个工作流实例，并记录到  process_instance_id  字段。之后可点击【查看审批】按钮，查看审批详情。如下图所示 :

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/38.png)

点击审批【通过】按钮，将合同审批通过，此时它会回调合同审核监听器，更新合同的审核字段为审批通过。如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/39.png)

③ 点击“合同名称”，进入合同详情页，可以查看合同的详细信息，如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/40.png)

#### 合同配置

**目前主要是合同提醒功能。**<br>
消息启用选项：是否开启提前提醒。如果开启，合同的结束时间超过今天，并且小于合同提醒天数的，可以在 [CRM 系统 -> 待办事项] 菜单中，看到提醒。如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/41.png)

- 对应 [CRM 系统 -> 系统配置 -> 合同配置] 菜单

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/42.png)

### 【回款】回款管理、回款计划

CRM 回款，主要指的是在销售过程中，企业与客户签订销售【合同】后，从客户那里实际收到的款项的记录。<br>
回款模块，需要开启  BPM 工作流进行审批和表单定义配置。<br>
**目前有两种回款链路方式，因此关系如下所示：**

- **【合同】=>【回款】**
- **【合同】=>【回款计划】=>【回款】**

#### 回款管理

①  回款编号：系统自动生成的，目前格式是  {prefix}{yyyyMMdd}{6 位自增}。<br>
②  客户编号和合同编号：对应客户表和合同表的编号字段，必填。<br>
③  回款计划编号：对应回款计划表的编号字段，选填。只有在【合同】=>【回款计划】=>【回款】的情况下，才会有值。<br>
④  回款的负责人编号：和线索类似。不重复赘述，详细可见  《【通用】数据权限》  文档。<br>
⑤  工作流编号：用于和  BPM 工作流   打通审批。提交审批后，会自动创建一个工作流实例，并记录到该字段。<br>
审批结果：目前有 5 个状态：未提交、审批中、审批通过、审批不通过、已取消。<br>
⑥  回款金额：一个合同可能有多次回款，它总的回款金额不能超过合同金额。<br>
⑦  回款日期、回款方式、备注。就是信息字段。

- 对应 [CRM 系统 -> 回款管理] 菜单

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/43.png)

① 参考  《【合同】合同管理、合同提醒》  文档，创建一个合同。注意，必须审核通过，才能进行回款。
② 点击【新增】按钮，随便填写一些信息，点击「确认」按钮，即可新增一条回款。如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/44.png)

这样，我们就完成了【合同】=>【回款】的整个回款链路。<br>
③ 点击【提交审批】按钮，可以提交审批。如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/45.png)
![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/46.png)

提交完成后，会自动创建一个工作流实例，并记录到工作流编号字段。之后可点击【查看审批】按钮，查看审批详情。如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/47.png)

点击审批【通过】按钮，将回款审批通过，此时它会回调回款计划监听器，更新回款的   审核状态为审批通过。如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/48.png)

④ 点击“回款编号”，进入回款详情页，可以查看回款的详细信息，如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/49.png)

另外，也可以在【合同】的详情页，进行【回款】的创建。如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/50.png)

#### 回款计划

① 期数：比如第一期、第二期、第三期等。<br>
② 客户编号和合同编号：对应客户表和合同表的编号字段，必填。 <br>
③ 回款计划的负责人编号：和线索类似。不重复赘述，详细可见 《【通用】数据权限》 文档。<br>
④ 回款编号：对应回款表的编号字段，选填。 只有在【合同】=>【回款计划】=>【回款】的情况下，才会有值。即基于【回款计划】创建【回款】时，会将【回款】的编号字段记录到这里。<br>
⑤ 回款日期、回款方式、回款金额、提醒天数、提醒日期、备注。就是信息字段， 其中提醒时间字段，有点特殊，它是回款日期字段减去提醒天数字段的日期，后续用于提醒，如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/51.png)

- 对应 [CRM 系统 -> 回款计划] 菜单

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/52.png)

① 点击【新增】按钮，随便填写一些信息，点击「确认」按钮，即可新增一条回款计划。如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/53.png)

② 点击【创建回款】按钮，可以创建回款。如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/54.png)

这样，我们就完成了【合同】=>【回款计划】=>【回款】的整个回款链路。<br>
③ 点击“期数”，进入回款计划详情页，可以查看回款计划的详细信息，如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/55.png)

另外，也可以在【合同】的详情页，进行【回款计划】的创建。如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/56.png)

### 【产品】产品管理、产品分类

产品模块，主要有产品信息、产品分类等功能。

#### 产品分类

目前系统只支持二级分类。

- 对应 [CRM 系统 -> 系统配置 -> 产品分类] 菜单

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/57.png)

#### 产品管理

①  产品单位：对应   产品单位   数据字典。<br>
②  产品状态：0 开启、1 禁用。<br>
③  产品分类编号：对应产品分类表。

- 对应 [CRM 系统 -> 产品管理 -> 产品管理] 菜单

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/58.png)

① 点击【新增】按钮，随便填写一些信息，点击「确认」按钮，即可新增一个产品。如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/59.png)

② 点击“产品名称”，进入产品详情页，可以查看产品的详细信息，如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/60.png)

### 【通用】跟进记录、待办事项

#### 跟进记录

支持线索、客户、联系人、商机、合同等对象的跟进记录。<br>
①  业务类型、业务编号字段：关联被跟进的对象，其中业务类型由字典枚举定义，包括线索、客户、联系人、商机、合同等等。<br>
② 跟进记录的基本信息：包括跟进类型、跟进内容、下次联系时间、图片、附件等等。比较重要的是用于提醒用户下次联系时间信息。<br>
③  关联的商机编号数组、关联的联系人编号数组。例如说，某个跟进记录关联了 3 个商机、2 个联系人。

- 在每个数据的详情界面，有一个 [跟进记录] 的功能，可以查看、新增、删除跟进记录。如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/61.png)

① 点击【写跟进】按钮，会弹出一个对话框，可以填写跟进记录的基本信息。如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/62.png)

② 确认后，会新增一条跟进记录。另外，在这个过程中，会更新用于提醒用户下次联系时间信息字段。

#### 待办事项

- 对应 [CRM 系统 -> 待办事项] 菜单

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/63.png)

### 【通用】数据权限

数据权限，支持某个人对某个数据（线索、客户、商机、合同等等），有对应的权限。<br>
目前权限由权限字典定义枚举，包括 3 种：OWNER（负责人）、WRITE（读写）、READ（只读），并且  OWNER > WRITE > READ。

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/64.png)

基本就是三要素：

- 人：用户编号字段
- 数据：业务类型  +  业务编号字段。其中业务类型是字典定义枚举，包括线索、客户、联系人、商机、合同、回款等等
- 权限：等级字段。由字典权限登记定义枚举，包括  OWNER、WRITE、READ  三种

#### OWNER  负责人

① 每个数据在新增时，会插入一条  OWNER  的权限，由系统自动完成；<br>
② 每个数据在转移时，会对新、老负责人的权限做不同的处理。例如说，联系人转移给其他人，会更新对应的权限。如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/65.png)

- 老负责人，会将对应的权限表的  level  更新为  READ
- 新负责人，会插入一条  OWNER  的权限

#### WRITE  读写、READ  只读

在每个数据的详情界面，有一个 [团队成员] 的功能，可以查看当前数据的权限，同时可以修改  WRITE  和  READ  的权限。如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/66.png)

#### 场景定义

另外，CRM 系统的所有管理界面，都有一个场景字典定义枚举，分成 3 种场景：OWNER  我负责的，INVOLVED  我参与的、SUBORDINATE  下属负责的，也是通过关联查询实现的。

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/67.png)

## BPM 管理后台

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/68.png)

### 【BPM】合同、回款审批工作流

BPM 模块

- 功能描述

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/94.png)
![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/70.png)

### 【表单】审批表单接入

项目基于 Flowable 实现了工作流的功能，提供两种方式接入：<br>
① 【流程表单】：在线配置动态表单，无需建表与开发<br>
② 【业务表单】：业务需建立独立的数据库表，并开发对应的表单、详情界面

#### 新建流程表单(合同)

① 访问 [工作流程 -> 流程管理 -> 流程表单] 菜单，点击「新增」按钮，新增一个名字为  contract-audit-form  的表单。如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/71.png)
![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/72.png)

#### 新建流程表单(回款计划)

① 访问 [工作流程 -> 流程管理 -> 流程表单] 菜单，点击「新增」按钮，新增一个名字为  receivable-plan-form  的表单。如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/73.png)
![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/74.png)

#### 合同和回款业务表单(需代码开发)

业务表单需建立独立的数据库表，并开发对应的表单、详情界面。
（待补充）

### 【流程】BPMN 流程设计

按照合同、回款业务需求定义新建流程模型，并发布为流程定义，如下图所示:

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/75.png)

#### 合同审批流程设计

- 流程模型
  对应 [工作流程 -> 流程管理 -> 流程模型] 菜单，如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/76.png)

① 　新建合同流程模型（流程标识必须设置为 crm-contract-audit）

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/77.png)

② 　点击「设计」按钮，在线设计合同审批流程模型（支持 BPMN 和 SIMPLE 两种模式流程设计）

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/78.png)

③ 　点击图中的“部门领导审批”，规则类型为“流程表达式”，流程表达式 为  ${bpmTaskAssignLeaderExpression.calculateUsers(execution, 1)}。如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/79.png)

点击图中的“HR 审批”，规则类型为“岗位”，指定岗位为“人力资源”。如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/80.png)

之后，点击右上角的「保存模型」按钮，完成流程模型的设计。<br>
④ 　点击「发布流程」按钮，把定义的流程模型部署出去。部署成功后，就可以发起该流程了。如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/81.png)
![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/82.png)

#### 回款审批流程设计

### 【流程】BPMN 流程发起及审批

#### 合同流程发起及审批

- 在 CRM 发起合同审核流程

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/83.png)

在 CRM 合同管理中我负责的合同列表中，选择需要进行审核合同点击「提交审核」按钮，提交确认成功，对应合同数据审核状态将变更为[审核中]。

- 在[工作流程 -> 审批中心 -> 发起流程] 菜单，可以看到可以选择的流程定义的列表。如下图所示：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/84.png)

① 　 选择名字为“合同审批”的流程定义，发起合同流程。填写合同审批表单信息如下：

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/85.png)

② 　点击提交成功后，可在 [工作流程 -> 审批中心 -> 我的流程]中，可看到该流程的状态、结果。

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/86.png)

③ 　点击「详情」按钮，可以查看申请的表单信息、审批记录、流程跟踪图

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/87.png)

④ 　合同审批负责人访问 [工作流程 -> 审批中心 -> 待办任务] 菜单，可以查询到需要审批的任务。

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/88.png)

⑤ 　点击「办理」按钮，填写审批建议，并点击「通过」按钮，这样任务的审批就完成了。

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/89.png))

⑥ 　访问 [工作流程 -> 审批中心 -> 已办任务] 菜单，可以查询到已经审批的任务。

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/90.png)

⑦ 　此时，合同审核发起人访问 [工作流程 -> 审批中心 -> 我的流程] 菜单，可以看到流程流转到了【下个审批人】任务。

![案例图片](https://miraicrm-oss.oss-cn-beijing.aliyuncs.com/91.png)

下个审批流程环节同上面第一个审核人流程展示一样

#### 回款流程发起及审批 ####
