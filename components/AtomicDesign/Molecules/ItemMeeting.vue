<template>
  <div>
    <NuxtLink
      :to="`/encuentros/${meeting._id}`"
      class="w-full"
      :class="
        meeting.isActive === true && meeting.isLock === false
          ? 'opacity-100'
          : 'opacity-30'
      "
    >
      <div class="w-full bg-transparent hover:bg-gray-50 flex py-3">
        <div class="w-full flex align-center">
          <div class="flex flex-col text-center mr-2">
            <span class="text-l uppercase">{{
              $moment(meeting.dateInt).format("MMM")
            }}</span>
            <span class="text-4xl font-normal">{{
              $moment(meeting.dateInt).format("DD")
            }}</span>
          </div>
          <div
            class="w-full text-blue-800 border-2 border-blue-400 rounded py-2 px-3"
          >
            <div class="flex flex-col">
              <span class="text-title font-semibold">{{ meeting.name }}</span>
              <span class="text-content"
                >{{ $moment(meeting.dateInt).format("h:mm a") }} -
                {{ $moment(meeting.dateEnd).format("h:mm a") }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "ItemMeeting",
  props: ["meeting"],
  components: {},
};
</script>