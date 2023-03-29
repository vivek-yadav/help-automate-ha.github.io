<script>
  import Tabs from "./Tabs.svelte";
	import AwsChefManaged from "./aws_chef_managed.svelte";
	import AwsAwsManaged from "./aws_aws_managed.svelte";
	import OnpremChefManaged from "./onprem_chef_managed.svelte";
	import OnpremSelfManaged from "./onprem_self_managed.svelte";
	import OnpremAwsManaged from "./onprem_aws_managed.svelte";
  import ResourceEstimation from "./resource_estimation.svelte";

  // List of tab items with labels, values and assigned components
  let items = [
    {
      label: "Automate HA Resource estimation",
      value : 1,
      component: ResourceEstimation
    },
    { label: "AWS Chef Managed DB",
		 value: 2,
		 component: AwsChefManaged
		},
    { label: "AWS AWS Managed DB",
		 value: 3,
		 component: AwsAwsManaged
		},
    { label: "On Prem Chef Managed DB",
		 value: 4,
		 component: OnpremChefManaged
		},
    { label: "On Prem Self Managed DB",
		 value: 5,
		 component: OnpremSelfManaged
		},
    { label: "On Prem AWS Managed DB",
		 value: 6,
		 component: OnpremAwsManaged
		}
  ];
</script>

<Tabs {items} />