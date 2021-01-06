<?php

namespace App\Http\Requests\Admin\CMS\Page;

use App\Http\Requests\BaseRequest;
use App\Interfaces\CMS\CMSInterface;
use App\Interfaces\CMS\TemplateInterface;
use Illuminate\Validation\Rule;

class PageUpdateRequest extends BaseRequest
{
    public function attributes() : array
    {
        $custom_attributes = [
            'content.*.template_field_id' => 'template field',
            'template_id' => 'template'
        ];

        return array_merge(parent::attributes(), $custom_attributes);
    }

    public function rules() : array
    {
        return [
            'content' => [
                'nullable',
                'array',
            ],
            'content.*.data'                => 'nullable',
            'content.*.template_field_id'   => [
                'required',
                'integer',
                Rule::exists('cms_template_fields', 'id')->where(function ($query) {
                    return $query->where('template_id', $this->request->get('template_id'));
                }),
            ],

            'enabled_at' => [
                'nullable',
                'date'
            ],
            'expired_at' => [
                'nullable',
                'date'
            ],
            'layout_id' => [
                'required',
                'integer',
                Rule::exists('cms_layouts', 'id'),
            ],
            'name' => [
                'required',
                'string',
                'max:' . CMSInterface::FIELD_NAME_MAX_LENGTH,
            ],
            'parent_id' => [
                'nullable',
                'integer',
                Rule::exists('cms_users', 'id'),
            ],
            'published_at' => [
                'nullable',
                'date'
            ],
            'template_id' => [
                'required',
                'integer',
                Rule::exists('cms_templates', 'id')->where(function ($query) {
                    $query->where('type', TemplateInterface::TYPE_PAGE);
                }),
            ],
            'slug' => [
                'required',
                'string',
                'max:' . CMSInterface::FIELD_SLUG_MAX_LENGTH,
                Rule::unique('cms_pages')->ignore($this->page->id, 'id')
            ],
        ];
    }
}