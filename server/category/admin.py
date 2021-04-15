from django.contrib import admin
from django.utils.safestring import mark_safe
from .models import Category



class CategoryAdmin(admin.ModelAdmin):
    model = Category
    list_display = ['name', 'type', 'sort_name','created_by', 'created_at', 'image_tag']
    search_fields = ('name',)
    ordering = ('sort_order', 'name')
    readonly_fields = ['created_at', 'updated_at', 'created_by', 'updated_by', 'image_tag']
    list_filter = ('is_active', 'type', 'created_at')
    fieldsets = (
        ("Category Info", {
            'fields': [
                ('type', 'name', 'sort_name'), 
                ('sort_order', 'is_active', ),
                ('description',),
                ('image', 'banner_image')
                ]
            }
        ),
        ('Other Info', 
            {
                'fields': [
                    ('created_by', 'created_at',
                    'updated_by', 'updated_at' )
                ]

            }
        ),
    )

    def image_tag(self, obj):
        if obj.image:
            return mark_safe('<img src="{0}" width="50" height="50" style="object-fit:contain" />'.format(obj.image.url))

    image_tag.short_description = 'Image'
    image_tag.allow_tags = True


    def save_model(self, request, obj, form, change):
        if not obj.created_at:
            obj.created_by = request.user
        obj.updated_by = request.user
        obj.save()


admin.site.register(Category, CategoryAdmin)