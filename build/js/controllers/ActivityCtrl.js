"use strict";!function(){function o(o,t){console.log("ActivityCtrl"),o.articleImgPath="img/photos/";var i=function(){setTimeout(function(){$(".slider-for").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!1,asNavFor:".slider-nav"}),$(".slider-nav").slick({slidesToShow:3,slidesToScroll:3,asNavFor:".slider-for",focusOnSelect:!0,dots:!1,infinite:!0,speed:300,variableWidth:!0,centerMode:!0})},500)};t.get("jsons/activity.json").then(function(t){o.articles=t.data,console.log(t.data)}).then(i)}o.$inject=["$scope","$http"],zemlyakiApp.controller("ActivityCtrl",o)}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL0FjdGl2aXR5Q3RybC5qcyJdLCJuYW1lcyI6WyJBY3Rpdml0eUN0cmwiLCIkc2NvcGUiLCIkaHR0cCIsImNvbnNvbGUiLCJsb2ciLCJhcnRpY2xlSW1nUGF0aCIsImluaXRTbGlkZXIiLCJzZXRUaW1lb3V0IiwiJCIsInNsaWNrIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhcnJvd3MiLCJmYWRlIiwiYXNOYXZGb3IiLCJmb2N1c09uU2VsZWN0IiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJ2YXJpYWJsZVdpZHRoIiwiY2VudGVyTW9kZSIsImdldCIsInRoZW4iLCJkYXRhIiwiYXJ0aWNsZXMiLCIkaW5qZWN0IiwiemVtbHlha2lBcHAiLCJjb250cm9sbGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxjQUVBLFdBQ0UsUUFBU0EsR0FBYUMsRUFBUUMsR0FDNUJDLFFBQVFDLElBQUksZ0JBQ1pILEVBQU9JLGVBQWlCLGFBRXhCLElBQUlDLEdBQWEsV0FDZkMsV0FBVyxXQUNUQyxFQUFFLGVBQWVDLE9BQ2ZDLGFBQWMsRUFDZEMsZUFBZ0IsRUFDaEJDLFFBQVEsRUFDUkMsTUFBTSxFQUNOQyxTQUFVLGdCQUdaTixFQUFFLGVBQWVDLE9BQ2ZDLGFBQWMsRUFDZEMsZUFBZ0IsRUFDaEJHLFNBQVUsY0FDVkMsZUFBZSxFQUNmQyxNQUFNLEVBQ05DLFVBQVUsRUFDVkMsTUFBTyxJQUNQQyxlQUFlLEVBQ2ZDLFlBQVksS0FFYixLQUdMbEIsR0FBTW1CLElBQUksdUJBQXVCQyxLQUFLLFNBQVVDLEdBQzlDdEIsRUFBT3VCLFNBQVdELEVBQUtBLEtBQ3ZCcEIsUUFBUUMsSUFBSW1CLEVBQUtBLFFBQ2hCRCxLQUFLaEIsR0FHVk4sRUFBYXlCLFNBQVcsU0FBVSxTQUNsQ0MsWUFBWUMsV0FBVyxlQUFnQjNCIiwiZmlsZSI6ImNvbnRyb2xsZXJzL0FjdGl2aXR5Q3RybC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgZnVuY3Rpb24gQWN0aXZpdHlDdHJsKCRzY29wZSwgJGh0dHApIHtcclxuICAgIGNvbnNvbGUubG9nKCdBY3Rpdml0eUN0cmwnKTtcclxuICAgICRzY29wZS5hcnRpY2xlSW1nUGF0aCA9ICdpbWcvcGhvdG9zLyc7XHJcblxyXG4gICAgdmFyIGluaXRTbGlkZXIgPSBmdW5jdGlvbiBpbml0U2xpZGVyKCkge1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuc2xpZGVyLWZvcicpLnNsaWNrKHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgIGZhZGU6IGZhbHNlLFxyXG4gICAgICAgICAgYXNOYXZGb3I6ICcuc2xpZGVyLW5hdidcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLnNsaWRlci1uYXYnKS5zbGljayh7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgIGFzTmF2Rm9yOiAnLnNsaWRlci1mb3InLFxyXG4gICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICBzcGVlZDogMzAwLFxyXG4gICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICAgICAgICAgIGNlbnRlck1vZGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgfSwgNTAwKTtcclxuICAgIH07XHJcblxyXG4gICAgJGh0dHAuZ2V0KCdqc29ucy9hY3Rpdml0eS5qc29uJykudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAkc2NvcGUuYXJ0aWNsZXMgPSBkYXRhLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7XHJcbiAgICB9KS50aGVuKGluaXRTbGlkZXIpO1xyXG4gIH1cclxuXHJcbiAgQWN0aXZpdHlDdHJsLiRpbmplY3QgPSBbJyRzY29wZScsICckaHR0cCddO1xyXG4gIHplbWx5YWtpQXBwLmNvbnRyb2xsZXIoJ0FjdGl2aXR5Q3RybCcsIEFjdGl2aXR5Q3RybCk7XHJcbn0pKCk7Il19
