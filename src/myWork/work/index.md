  <h3>代码的版本管理流程：</h3>
  <p>dev 为开发分支的总分支</p>
  <p>dev-02 为临时总分支的过渡分支</p>
  <p><span class="red">举例</span> ：同一天要发 4-21 的预生产 和 5-11的uat</p>
  <p>预生产code的merge顺序： dev-2021-4-21  -> dev -> pre-prod-2.1</p>
  <p>dev-02分支的作用： dev -> dev-02</p>
  <p>uat：dev-2021-5-11 -> dev-02 -> uat</p>
  <p>当4-21发了生产之后，dev-02分支就可以不用管了，还是以我们dev分支为主，把5-11的code merge到dev上即可</p>
  <p><strong>一、 uat</strong></p>
  <p>code顺序: dev-2021-6-11 -> dev -> uat</p>
  <p>然后从  uat分支  gcb 切出当天发布的分支，例如:今天需要发uat:  uat -> uat-2021-06-17</p>
  <p><strong>二、pre-prod</strong></p>
  <p>code顺序: dev-2021-6-11 -> dev -> pre-prod-2.1</p>
  <p>然后从  pre-prod-2.1分支  gcb 切出当天发布的分支，例如:今天需要发预生产:  pre-prod-2.1 -> pre-prod-2.1-2021-06-17</p>
  <p><strong>三、prod</strong></p>
  <p>code顺序：dev-2021-6-11 -> dev -> pre-prod-2.1</p>
  <p>然后从  pre-prod-2.1分支  gcb 切出当天发布的分支，例如:今天需要发生产:  pre-prod-2.1 -> prod-2.1-2021-06-17</p>
  <p><strong>四、hotfix分支</strong></p>
  <p>指的是在生产上出现了一些问题，或者需要变更一些需求等问题，此时就需要从dev切出hotfix分支，在hotfix分支上进行开发或者进行修改，开发完就可以把hotfix分支的代码merge到dev分支然后在merge到最新开发分支</p>
  <p class="red"><strong>以上千万要切记，不能从uat、或者 pre-prod-2.1 分支merge到dev分支，如果在uat或pre-prod-2.1分支上进行了修改，可以切到dev分支用gcp c207a19(commit id)过来</strong></p>
