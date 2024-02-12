document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('articleImage').addEventListener('click', function() {
      document.getElementById('imageUpload').click();
  });

  document.getElementById('imageUpload').addEventListener('change', function(event) {
      if (event.target.files.length > 0) {
          const reader = new FileReader();
          reader.onload = function(e) {
              document.getElementById('articleImage').src = e.target.result;
          };
          reader.readAsDataURL(event.target.files[0]);
      }
  });
});
