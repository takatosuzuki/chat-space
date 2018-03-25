// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(function(){

  function adjust(){
    var h = $(window).height();
    var side = $('.chat-side');
    var m_body = $('.chat-body');
    var m_header = $('.chat-header').outerHeight();
    var m_footer = $('.chat-footer').outerHeight();
    var re_body = $(window).height() - m_header - m_footer;
    side.css('height',h + 'px');
    m_body.css('height', re_body + 'px');    
  }
  
  $(window).on('load resize', function() {
    adjust();
  });
});
